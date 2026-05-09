import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Flow from "../../lib/Flow.js"
import PhysicalProduct from "../../lib/PhysicalProduct.js"
import RealizedProductionFlow from "../../lib/RealizedProductionFlow.js"
import Quantity from "../../lib/Quantity.js"
import RealizedProductionFlow from "../../lib/RealizedProductionFlow.js"
import RealizedTransformation from "../../lib/RealizedTransformation.js"
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

test('RealizedProductionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const hdfhynxpkq = new Quantity({ connector });
		const lcficijjfy = new RealizedTransformation({ connector, semanticId: 'http://base.com/zmthafxhbh' });
		const khyjsiuiye = new PhysicalProduct({ connector, semanticId: 'http://base.com/hclgfnyirm' });
		const obj = new RealizedProductionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: hdfhynxpkq,
			transformation: lcficijjfy,
			product: khyjsiuiye
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = hdfhynxpkq;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getRealizedTransformation();
		const expectedTransformation = lcficijjfy;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getProducedProduct();
		const expectedProduct = khyjsiuiye;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
