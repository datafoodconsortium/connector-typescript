import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Flow from "../../lib/Flow.js"
import PhysicalProduct from "../../lib/PhysicalProduct.js"
import RealizedProductionFlow from "../../lib/RealizedProductionFlow.js"
import Quantity from "../../lib/Quantity.js"
import RealizedConsumptionFlow from "../../lib/RealizedConsumptionFlow.js"
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

test('RealizedConsumptionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const hbkfpnwqkt = new Quantity({ connector });
		const henkuqfrph = new RealizedTransformation({ connector, semanticId: 'http://base.com/ktjlwyqovl' });
		const dunpezpiyp = new PhysicalProduct({ connector, semanticId: 'http://base.com/zdlwgzmgcw' });
		const obj = new RealizedConsumptionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: hbkfpnwqkt,
			transformation: henkuqfrph,
			product: dunpezpiyp
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = hbkfpnwqkt;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getRealizedTransformation();
		const expectedTransformation = henkuqfrph;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getConsumedProduct();
		const expectedProduct = dunpezpiyp;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
