import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Price from "../../lib/Price.js"
import PaymentMethod from "../../lib/PaymentMethod.js"
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

test('PaymentMethod', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const jbqpuppwcx = new Price({ connector });
		
		
		const obj = new PaymentMethod({
			connector,
			semanticId: "http://example.org/obj",
			name: "nicoarmwzz",
			description: "roysbhydfh",
			price: jbqpuppwcx,
			provider: "cbajomxlqo",
			type: "exxpdvuljd"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "nicoarmwzz";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "roysbhydfh";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const expectedPrice = jbqpuppwcx;
		const actualPrice = obj.getPrice();
		await t.test(`#price`, () => {
			assertSemanticEqual(actualPrice, expectedPrice);
		});

		const actualProvider = obj.getProvider();
		const expectedProvider = "cbajomxlqo";
		await t.test(`#provider`, () => {
			assert.strictEqual(actualProvider, expectedProvider);
		});

		const actualType = obj.getType();
		const expectedType = "exxpdvuljd";
		await t.test(`#type`, () => {
			assert.strictEqual(actualType, expectedType);
		});
	});
});
