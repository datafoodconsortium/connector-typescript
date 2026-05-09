import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import ProductBatch from "../../lib/ProductBatch.js"
import PhysicalProduct from "../../lib/PhysicalProduct.js"
import RealStock from "../../lib/RealStock.js"
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

test('RealStock', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const bjuhstudyl = new PhysicalProduct({ connector, semanticId: 'http://base.com/dsrceyqneu' });
		const krjuucukmf = new Quantity({ connector });
		const fdoxwkoczq = new PhysicalPlace({ connector, semanticId: 'http://base.com/ptiblozlxr' });
		
		const doekkymtdz = [new ProductBatch({ connector, semanticId: 'http://base.com/abyslqhduv' })];
		const obj = new RealStock({
			connector,
			semanticId: "http://example.org/obj",
			physicalProduct: bjuhstudyl,
			quantity: krjuucukmf,
			physicalPlace: fdoxwkoczq,
			availabilityDate: dwqkylmmix,
			productBatches: doekkymtdz
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualPhysicalProduct = await obj.getPhysicalProduct();
		const expectedPhysicalProduct = bjuhstudyl;
		await t.test(`#physicalProduct`, () => {
			assertSemanticEqual(actualPhysicalProduct, expectedPhysicalProduct);
		});

		const expectedQuantity = krjuucukmf;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualPhysicalPlace = await obj.getPhysicalPlace();
		const expectedPhysicalPlace = fdoxwkoczq;
		await t.test(`#physicalPlace`, () => {
			assertSemanticEqual(actualPhysicalPlace, expectedPhysicalPlace);
		});

		const actualAvailabilityDate = obj.getAvailabilityDate();
		const expectedAvailabilityDate = dwqkylmmix;
		await t.test(`#availabilityDate`, () => {
			assert.strictEqual(actualAvailabilityDate, expectedAvailabilityDate);
		});

		const actualProductBatches = await obj.getProductBatches();
		const expectedProductBatches = doekkymtdz;
		await actualProductBatches.forEach((actual, i) => {
			t.test(`#productBatches[${i}]`, () => {
				assert.strictEqual(actual, expectedProductBatches[i]);
			});
		});
	});
});
