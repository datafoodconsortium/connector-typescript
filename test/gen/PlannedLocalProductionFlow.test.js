import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PlannedLocalTransformation from "../../lib/PlannedLocalTransformation.js"
import Flow from "../../lib/Flow.js"
import LocalizedProduct from "../../lib/LocalizedProduct.js"
import PlannedLocalProductionFlow from "../../lib/PlannedLocalProductionFlow.js"
import Quantity from "../../lib/Quantity.js"
import PlannedLocalConsumptionFlow from "../../lib/PlannedLocalConsumptionFlow.js"
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

test('PlannedLocalProductionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const fwgrelqcnv = new Quantity({ connector });
		const rmltakpzdt = new PlannedLocalTransformation({ connector, semanticId: 'http://base.com/lzfhoeamsr' });
		const gyvjxjtelb = new LocalizedProduct({ connector, semanticId: 'http://base.com/fkzomvgoru' });
		const obj = new PlannedLocalProductionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: fwgrelqcnv,
			transformation: rmltakpzdt,
			product: gyvjxjtelb
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = fwgrelqcnv;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedLocalTransformation();
		const expectedTransformation = rmltakpzdt;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getProducedProduct();
		const expectedProduct = gyvjxjtelb;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
