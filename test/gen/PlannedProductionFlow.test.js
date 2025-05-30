import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Quantity from "../../lib/Quantity.js"
import PlannedTransformation from "../../lib/PlannedTransformation.js"
import PlannedProductionFlow from "../../lib/PlannedProductionFlow.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import PlannedProductionFlow from "../../lib/PlannedProductionFlow.js"
import Flow from "../../lib/Flow.js"
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

test('PlannedProductionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const cswpitcacp = new Quantity({ connector });
		const dtphhkfrkr = new PlannedTransformation({ connector, semanticId: 'http://base.com/vkvahmjaoy' });
		const izybrfybpd = new SuppliedProduct({ connector, semanticId: 'http://base.com/sbxjhatefb' });
		const obj = new PlannedProductionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: cswpitcacp,
			transformation: dtphhkfrkr,
			product: izybrfybpd
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = cswpitcacp;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedTransformation();
		const expectedTransformation = dtphhkfrkr;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getProducedProduct();
		const expectedProduct = izybrfybpd;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
