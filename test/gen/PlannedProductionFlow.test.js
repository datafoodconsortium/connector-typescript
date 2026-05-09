import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Flow from "../../lib/Flow.js"
import PlannedProductionFlow from "../../lib/PlannedProductionFlow.js"
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

test('PlannedProductionFlow', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const xsijomkhau = new Quantity({ connector });
		const aopilbghtp = new PlannedTransformation({ connector, semanticId: 'http://base.com/qhqfjuugez' });
		const vfglsgmgai = new SuppliedProduct({ connector, semanticId: 'http://base.com/jvrmyqfzwd' });
		const obj = new PlannedProductionFlow({
			connector,
			semanticId: "http://example.org/obj",
			quantity: xsijomkhau,
			transformation: aopilbghtp,
			product: vfglsgmgai
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const expectedQuantity = xsijomkhau;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualTransformation = await obj.getPlannedTransformation();
		const expectedTransformation = aopilbghtp;
		await t.test(`#transformation`, () => {
			assertSemanticEqual(actualTransformation, expectedTransformation);
		});

		const actualProduct = await obj.getProducedProduct();
		const expectedProduct = vfglsgmgai;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});
	});
});
