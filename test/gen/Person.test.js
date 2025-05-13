import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Person from "../../lib/Person.js"
import Address from "../../lib/Address.js"
import Agent from "../../lib/Agent.js"
import Enterprise from "../../lib/Enterprise.js"
import { assertSemanticEqual } from '../utils.js';

const connector = new Connector();

const json = `{
    "@context": "https://www.datafoodconsortium.org",
    "@id": "http://myplatform.com/catalog1",
    "@type": "dfc-b:Catalog",
    "dfc-b:lists": {
        "@id": "http://myplatform.com/catalogItem1"
    },
    "dfc-b:maintainedBy": {
        "@id": "http://myplatform.com/enterprise1"
    }
}`;

test('Person', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const puqnkdodqq = [new Address({ connector, semanticId: 'http://base.com/mduqqscavw' })];
		const iebvuzxybv = [new Enterprise({ connector, semanticId: 'http://base.com/ntjlhnwpxy' })];
		
		const obj = new Person({
			connector,
			semanticId: "http://example.org/obj",
			firstName: "ixliuqvowe",
			lastName: "bjwvjodjzs",
			localizations: puqnkdodqq,
			organizations: iebvuzxybv,
			logo: "uaxilajuus"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualFirstName = obj.getFirstName();
		const expectedFirstName = "ixliuqvowe";
		await t.test(`#firstName`, () => {
			assert.strictEqual(actualFirstName, expectedFirstName);
		});

		const actualLastName = obj.getLastName();
		const expectedLastName = "bjwvjodjzs";
		await t.test(`#lastName`, () => {
			assert.strictEqual(actualLastName, expectedLastName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = puqnkdodqq;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualOrganizations = await obj.getAffiliatedOrganizations();
		const expectedOrganizations = iebvuzxybv;
		await actualOrganizations.forEach((actual, i) => {
			t.test(`#organizations[${i}]`, () => {
				assert.strictEqual(actual, expectedOrganizations[i]);
			});
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "uaxilajuus";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
