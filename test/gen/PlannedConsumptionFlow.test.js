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
		const qwqfftohgd = new Quantity({ connector });
		const jwwaffncbw = new PlannedTransformation({ connector, semanticId: 'http://base.com/dptnchqttk' });
		const pgjdjisxvz = new TechnicalProduct({ connector, semanticId: 'http://base.com/abmfvvepja' });
		const obj = new PlannedConsumptionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: qwqfftohgd,
			transformation: jwwaffncbw,
			product: pgjdjisxvz
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = qwqfftohgd;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedTransformation();
		const expectedTransformation = jwwaffncbw;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getConsumedProduct();
		const expectedProduct = pgjdjisxvz;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
