import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import ProductBatch from "../../lib/ProductBatch.js"
import PhysicalProduct from "../../lib/PhysicalProduct.js"
import RealStock from "../../lib/RealStock.js"
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

test('ProductBatch', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		
		const ynyxeinnvs = new RealStock({ connector, semanticId: 'http://base.com/nyhpqjgcnc' });
		const ubqcdnaxuh = new PhysicalProduct({ connector, semanticId: 'http://base.com/enuwhamngs' });
		
		
		
		const obj = new ProductBatch({
			connector,
			semanticId: "http://example.org/obj",
			name: "jpruasbrcs",
			description: "uvmjuqflss",
			batchNumber: "oswlvjsooj",
			realStock: ynyxeinnvs,
			physicalProduct: ubqcdnaxuh,
			bestBeforeDate: oktebxpzfn,
			expirationDate: rgmwydpewc,
			productionDate: pjzfoqnmhx
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "jpruasbrcs";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "uvmjuqflss";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualBatchNumber = obj.getBatchNumber();
		const expectedBatchNumber = "oswlvjsooj";
		await t.test(`#batchNumber`, () => {
			assert.strictEqual(actualBatchNumber, expectedBatchNumber);
		});

		const actualRealStock = await obj.getRealStock();
		const expectedRealStock = ynyxeinnvs;
		await t.test(`#realStock`, () => {
			assertSemanticEqual(actualRealStock, expectedRealStock);
		});

		const actualPhysicalProduct = await obj.getPhysicalProduct();
		const expectedPhysicalProduct = ubqcdnaxuh;
		await t.test(`#physicalProduct`, () => {
			assertSemanticEqual(actualPhysicalProduct, expectedPhysicalProduct);
		});

		const actualBestBeforeDate = obj.getBestBeforeDate();
		const expectedBestBeforeDate = oktebxpzfn;
		await t.test(`#bestBeforeDate`, () => {
			assert.strictEqual(actualBestBeforeDate, expectedBestBeforeDate);
		});

		const actualExpirationDate = obj.getExpirationDate();
		const expectedExpirationDate = rgmwydpewc;
		await t.test(`#expirationDate`, () => {
			assert.strictEqual(actualExpirationDate, expectedExpirationDate);
		});

		const actualProductionDate = obj.getProductionDate();
		const expectedProductionDate = pjzfoqnmhx;
		await t.test(`#productionDate`, () => {
			assert.strictEqual(actualProductionDate, expectedProductionDate);
		});
	});
});
