import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PlannedLocalConsumptionFlow from "../../lib/PlannedLocalConsumptionFlow.js"
import PlannedLocalTransformation from "../../lib/PlannedLocalTransformation.js"
import Flow from "../../lib/Flow.js"
import LocalizedProduct from "../../lib/LocalizedProduct.js"
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

test('PlannedLocalConsumptionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const zwrkkdyfgy = new Quantity({ connector });
		const dukbuhfjda = new PlannedLocalTransformation({ connector, semanticId: 'http://base.com/rljynkpazl' });
		const ctsxujvvus = new LocalizedProduct({ connector, semanticId: 'http://base.com/raiyoduarf' });
		const obj = new PlannedLocalConsumptionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: zwrkkdyfgy,
			transformation: dukbuhfjda,
			product: ctsxujvvus
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = zwrkkdyfgy;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedLocalTransformation();
		const expectedTransformation = dukbuhfjda;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getConsumedProduct();
		const expectedProduct = ctsxujvvus;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
