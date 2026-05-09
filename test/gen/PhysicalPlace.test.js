import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Person from "../../lib/Person.js"
import Address from "../../lib/Address.js"
import RealStock from "../../lib/RealStock.js"
import TheoreticalStock from "../../lib/TheoreticalStock.js"
import PhysicalPlace from "../../lib/PhysicalPlace.js"
import PhoneNumber from "../../lib/PhoneNumber.js"
import SaleSession from "../../lib/SaleSession.js"
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

test('PhysicalPlace', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const qkgrzbyyvn = [new SaleSession({ connector, semanticId: 'http://base.com/mealnsoodf' })];
		const nsoelzekab = [new PhoneNumber({ connector, semanticId: 'http://base.com/ttmcupwkuz' })];
		const shgxwkkasv = [new invalid({ connector, semanticId: 'http://base.com/hppjzflfal' })];
		const ubolsnrfds = new Address({ connector, semanticId: 'http://base.com/tymytsiwdm' });
		const nerjcbgyja = [new Person({ connector, semanticId: 'http://base.com/rulxhirinm' })];
		const wgotpgdcnk = [new TheoreticalStock({ connector, semanticId: 'http://base.com/hsqcpxyasz' })];
		const pncglnyorr = [new RealStock({ connector, semanticId: 'http://base.com/tdtliwkdsd' })];
		const obj = new PhysicalPlace({
			connector,
			semanticId: "http://example.org/obj",
			name: "dwfrzbhklk",
			description: "hnvceqvrme",
			hostedSaleSessions: qkgrzbyyvn,
			phoneNumbers: nsoelzekab,
			openingHours: shgxwkkasv,
			address: ubolsnrfds,
			mainContacts: nerjcbgyja,
			theoreticalStocks: wgotpgdcnk,
			realStocks: pncglnyorr
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "dwfrzbhklk";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "hnvceqvrme";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualHostedSaleSessions = await obj.getHostedSaleSessions();
		const expectedHostedSaleSessions = qkgrzbyyvn;
		await actualHostedSaleSessions.forEach((actual, i) => {
			t.test(`#hostedSaleSessions[${i}]`, () => {
				assert.strictEqual(actual, expectedHostedSaleSessions[i]);
			});
		});

		const actualPhoneNumbers = await obj.getPhoneNumbers();
		const expectedPhoneNumbers = nsoelzekab;
		await actualPhoneNumbers.forEach((actual, i) => {
			t.test(`#phoneNumbers[${i}]`, () => {
				assert.strictEqual(actual, expectedPhoneNumbers[i]);
			});
		});

		const actualOpeningHours = await obj.getOpeningHours();
		const expectedOpeningHours = shgxwkkasv;
		await actualOpeningHours.forEach((actual, i) => {
			t.test(`#openingHours[${i}]`, () => {
				assert.strictEqual(actual, expectedOpeningHours[i]);
			});
		});

		const actualAddress = await obj.getAddress();
		const expectedAddress = ubolsnrfds;
		await t.test(`#address`, () => {
			assertSemanticEqual(actualAddress, expectedAddress);
		});

		const actualMainContacts = await obj.getMainContacts();
		const expectedMainContacts = nerjcbgyja;
		await actualMainContacts.forEach((actual, i) => {
			t.test(`#mainContacts[${i}]`, () => {
				assert.strictEqual(actual, expectedMainContacts[i]);
			});
		});

		const actualTheoreticalStocks = await obj.getTheoreticalStocks();
		const expectedTheoreticalStocks = wgotpgdcnk;
		await actualTheoreticalStocks.forEach((actual, i) => {
			t.test(`#theoreticalStocks[${i}]`, () => {
				assert.strictEqual(actual, expectedTheoreticalStocks[i]);
			});
		});

		const actualRealStocks = await obj.getRealStocks();
		const expectedRealStocks = pncglnyorr;
		await actualRealStocks.forEach((actual, i) => {
			t.test(`#realStocks[${i}]`, () => {
				assert.strictEqual(actual, expectedRealStocks[i]);
			});
		});
	});
});
