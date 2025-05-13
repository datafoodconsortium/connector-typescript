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
		const ylgxdoqcqm = new Quantity({ connector });
		const njoglqdzyd = new PlannedTransformation({ connector, semanticId: 'http://base.com/mrpaacjibp' });
		const eyxpojciky = new TechnicalProduct({ connector, semanticId: 'http://base.com/yalvmoauwg' });
		const obj = new PlannedConsumptionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: ylgxdoqcqm,
			transformation: njoglqdzyd,
			product: eyxpojciky
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = ylgxdoqcqm;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedTransformation();
		const expectedTransformation = njoglqdzyd;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getConsumedProduct();
		const expectedProduct = eyxpojciky;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
