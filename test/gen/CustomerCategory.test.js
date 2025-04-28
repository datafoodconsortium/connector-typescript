import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import CustomerCategory from "../../lib/CustomerCategory.js"
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

test('CustomerCategory', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		const obj = new CustomerCategory({
			connector,
			semanticId: "http://example.org/obj",
			description: "trnipjadmx"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualDescription = obj.getDescription();
		const expectedDescription = "trnipjadmx";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});
	});
});
