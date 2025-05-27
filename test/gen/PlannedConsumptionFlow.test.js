import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Quantity from "../../lib/Quantity.js"
import TechnicalProduct from "../../lib/TechnicalProduct.js"
import PlannedTransformation from "../../lib/PlannedTransformation.js"
import PlannedProductionFlow from "../../lib/PlannedProductionFlow.js"
import Flow from "../../lib/Flow.js"
import PlannedConsumptionFlow from "../../lib/PlannedConsumptionFlow.js"
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

test('PlannedConsumptionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const trnyqejtag = new Quantity({ connector });
		const amqvesrkzg = new PlannedTransformation({ connector, semanticId: 'http://base.com/mymcjyfqzy' });
		const orwbskphft = new TechnicalProduct({ connector, semanticId: 'http://base.com/oshobawklt' });
		const obj = new PlannedConsumptionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: trnyqejtag,
			transformation: amqvesrkzg,
			product: orwbskphft
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = trnyqejtag;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedTransformation();
		const expectedTransformation = amqvesrkzg;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getConsumedProduct();
		const expectedProduct = orwbskphft;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
