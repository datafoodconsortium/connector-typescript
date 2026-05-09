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
		
		
		const vbjanksnvt = [new Address({ connector, semanticId: 'http://base.com/igjeqhqmxt' })];
		const edtwrtbdis = [new Enterprise({ connector, semanticId: 'http://base.com/ipprtgivwr' })];
		
		const obj = new Person({
			connector,
			semanticId: "http://example.org/obj",
			firstName: "qgtjoknjgg",
			lastName: "hnmstqwedg",
			localizations: vbjanksnvt,
			organizations: edtwrtbdis,
			logo: "yrzbshmpkp"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualFirstName = obj.getFirstName();
		const expectedFirstName = "qgtjoknjgg";
		await t.test(`#firstName`, () => {
			assert.strictEqual(actualFirstName, expectedFirstName);
		});

		const actualLastName = obj.getLastName();
		const expectedLastName = "hnmstqwedg";
		await t.test(`#lastName`, () => {
			assert.strictEqual(actualLastName, expectedLastName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = vbjanksnvt;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualOrganizations = await obj.getAffiliatedOrganizations();
		const expectedOrganizations = edtwrtbdis;
		await actualOrganizations.forEach((actual, i) => {
			t.test(`#organizations[${i}]`, () => {
				assert.strictEqual(actual, expectedOrganizations[i]);
			});
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "yrzbshmpkp";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
