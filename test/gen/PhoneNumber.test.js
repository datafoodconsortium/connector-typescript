import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PhoneNumber from "../../lib/PhoneNumber.js"
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

test('PhoneNumber', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const obj = new PhoneNumber({
			connector,
			semanticId: "http://example.org/obj",
			countryCode: -1254644230,
			phoneNumber: "ieaaqkwlxu"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualCountryCode = obj.getCountryCode();
		const expectedCountryCode = -1254644230;
		await t.test(`#countryCode`, () => {
			assert.strictEqual(actualCountryCode, expectedCountryCode);
		});

		const actualPhoneNumber = obj.getNumber();
		const expectedPhoneNumber = "ieaaqkwlxu";
		await t.test(`#phoneNumber`, () => {
			assert.strictEqual(actualPhoneNumber, expectedPhoneNumber);
		});
	});
});
