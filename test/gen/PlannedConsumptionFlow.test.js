import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Flow from "../../lib/Flow.js"
import PlannedConsumptionFlow from "../../lib/PlannedConsumptionFlow.js"
import PlannedTransformation from "../../lib/PlannedTransformation.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import Quantity from "../../lib/Quantity.js"
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
		const sonmwrggzp = new Quantity({ connector });
		const bwtcqzizjh = new PlannedTransformation({ connector, semanticId: 'http://base.com/lltrcmwfec' });
		const xcvobhsclv = new SuppliedProduct({ connector, semanticId: 'http://base.com/gzzfahcqgg' });
		const obj = new PlannedConsumptionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: sonmwrggzp,
			transformation: bwtcqzizjh,
			product: xcvobhsclv
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = sonmwrggzp;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedTransformation();
		const expectedTransformation = bwtcqzizjh;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getConsumedProduct();
		const expectedProduct = xcvobhsclv;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
