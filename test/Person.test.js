import expect from 'node:assert';
import { test } from 'node:test';
import Connector from "../lib/Connector.js";

const connector = new Connector();

const address = connector.createAddress({
    semanticId: "http://myplatform.com/address/address1"
});

const address2 = connector.createAddress({
    semanticId: "http://myplatform.com/address/address2"
});

const enterprise = connector.createEnterprise({
    semanticId: "http://myplatform.com/address/enterprise1"
});

const enterprise2 = connector.createEnterprise({
    semanticId: "http://myplatform.com/address/enterprise2"
});

const person = connector.createPerson({
    semanticId: "http://myplatform.com/person1",
    firstName: "John",
    lastName: "Smith",
    localizations: [address],
    organizations: [enterprise]
});

const json = `{"@context":"https://www.datafoodconsortium.org","@id":"http://myplatform.com/person1","@type":"dfc-b:Person","dfc-b:affiliates":"http://myplatform.com/address/enterprise1","dfc-b:familyName":"Smith","dfc-b:firstName":"John","dfc-b:hasAddress":{"@id":"http://myplatform.com/address/address1"}}`;

test('Person:import', async () => {
    const imported = await connector.import(json);
    const importedPerson = imported[0];
    expect.strictEqual(imported.length, 1);
    expect.strictEqual(importedPerson.equals(person), true);
});

test('Person:export', async () => {
    const serialized = await connector.export([person]);
    expect.strictEqual(serialized, json);
});

test('Person:getSemanticId', () => {
    expect.strictEqual(person.getSemanticId(), "http://myplatform.com/person1");
});

test('Person:getFirstName', () => {
    expect.strictEqual(person.getFirstName(), "John");
});

test('Person:getLastName', () => {
    expect.strictEqual(person.getLastName(), "Smith");
});

test('Person:getLocalizations', async () => {
    const localizations = await person.getLocalizations();
    expect.strictEqual(localizations.length, 1);
    expect.strictEqual(localizations[0].equals(address), true);
});

test('Person:getAffiliatedOrganizations', async () => {
    const organizations = await person.getAffiliatedOrganizations();
    expect.strictEqual(organizations.length, 1);
    expect.strictEqual(organizations[0].equals(enterprise), true);
});

test('Person:setFirstName', () => {
    person.setFirstName("John2");
    expect.strictEqual(person.getFirstName(), "John2");
});

test('Person:setLastName', () => {
    person.setLastName("Smith2");
    expect.strictEqual(person.getLastName(), "Smith2");
});

test('Person:addLocalization', async () => {
    person.addLocalization(address2);
    const localizations = await person.getLocalizations();
    expect.strictEqual(localizations.length, 2);
    expect.strictEqual(localizations[0].equals(address), true);
    expect.strictEqual(localizations[1].equals(address2), true);
});

test('Person:affiliatedTo', async () => {
    person.affiliateTo(enterprise2);
    const organizations = await person.getAffiliatedOrganizations();
    expect.strictEqual(organizations.length, 2);
    expect.strictEqual(organizations[0].equals(enterprise), true);
    expect.strictEqual(organizations[1].equals(enterprise2), true);
});

/*
test('Person:removeLocalization', async () => {
    person.removeLocalization(address);
    const localizations = await person.getLocalizations();
    expect(localizations.length).strictEqual();
    expect.strictEqual(localizations[0].equals(address2), true);
});

test('Person:leaveAaffiliatedOrganization', async () => {
    person.leaveAaffiliatedOrganization(enterprise);
    const organizations = await person.affiliatedOrganizations();
    expect.strictEqual(organizations.length, 1);
    expect.strictEqual(organizations[0].equals(enterprise2), true);
});*/