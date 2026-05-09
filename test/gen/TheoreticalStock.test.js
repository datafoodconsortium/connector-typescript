import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import LocalizedProduct from "../../lib/LocalizedProduct.js"
import TheoreticalStock from "../../lib/TheoreticalStock.js"
import PhysicalPlace from "../../lib/PhysicalPlace.js"
import Quantity from "../../lib/Quantity.js"
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

test('TheoreticalStock', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const ieplugnttj = new LocalizedProduct({ connector, semanticId: 'http://base.com/gqdpbxszsg' });
		const tqgixnhwqd = new Quantity({ connector });
		const wbkdfzcekg = new PhysicalPlace({ connector, semanticId: 'http://base.com/cuoxxsqomf' });
		
		const obj = new TheoreticalStock({
			connector,
			semanticId: "http://example.org/obj",
			localizedProduct: ieplugnttj,
			quantity: tqgixnhwqd,
			physicalPlace: wbkdfzcekg,
			availabilityDate: mdchgukbbx
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualLocalizedProduct = await obj.getLocalizedProduct();
		const expectedLocalizedProduct = ieplugnttj;
		await t.test(`#localizedProduct`, () => {
			assertSemanticEqual(actualLocalizedProduct, expectedLocalizedProduct);
		});

		const expectedQuantity = tqgixnhwqd;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualPhysicalPlace = await obj.getPhysicalPlace();
		const expectedPhysicalPlace = wbkdfzcekg;
		await t.test(`#physicalPlace`, () => {
			assertSemanticEqual(actualPhysicalPlace, expectedPhysicalPlace);
		});

		const actualAvailabilityDate = obj.getAvailabilityDate();
		const expectedAvailabilityDate = mdchgukbbx;
		await t.test(`#availabilityDate`, () => {
			assert.strictEqual(actualAvailabilityDate, expectedAvailabilityDate);
		});
	});
});
