import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Address from "../../lib/Address.js"
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

test('Address', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		
		
		
		
		
		const obj = new Address({
			connector,
			semanticId: "http://example.org/obj",
			street: "yqnpbuefpv",
			postalCode: "swawtlsfet",
			city: "kzpnlyarlx",
			country: "gttpkesxxe",
			latitude: 0.13530248,
			longitude: 0.6261853,
			region: "apbgawnvha"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualStreet = obj.getStreet();
		const expectedStreet = "yqnpbuefpv";
		await t.test(`#street`, () => {
			assert.strictEqual(actualStreet, expectedStreet);
		});

		const actualPostalCode = obj.getPostalCode();
		const expectedPostalCode = "swawtlsfet";
		await t.test(`#postalCode`, () => {
			assert.strictEqual(actualPostalCode, expectedPostalCode);
		});

		const actualCity = obj.getCity();
		const expectedCity = "kzpnlyarlx";
		await t.test(`#city`, () => {
			assert.strictEqual(actualCity, expectedCity);
		});

		const actualCountry = obj.getCountry();
		const expectedCountry = "gttpkesxxe";
		await t.test(`#country`, () => {
			assert.strictEqual(actualCountry, expectedCountry);
		});

		const actualLatitude = obj.getLatitude();
		const expectedLatitude = 0.13530248;
		await t.test(`#latitude`, () => {
			assert.strictEqual(actualLatitude, expectedLatitude);
		});

		const actualLongitude = obj.getLongitude();
		const expectedLongitude = 0.6261853;
		await t.test(`#longitude`, () => {
			assert.strictEqual(actualLongitude, expectedLongitude);
		});

		const actualRegion = obj.getRegion();
		const expectedRegion = "apbgawnvha";
		await t.test(`#region`, () => {
			assert.strictEqual(actualRegion, expectedRegion);
		});
	});
});
