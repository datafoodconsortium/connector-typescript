import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Offer from "../../lib/Offer.js"
import CatalogItem from "../../lib/CatalogItem.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import Catalog from "../../lib/Catalog.js"
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

test('CatalogItem', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const qctlridesh = new SuppliedProduct({ connector, semanticId: 'http://base.com/khqzgwlwde' });
		
		
		const gumlrqfopn = [new Offer({ connector, semanticId: 'http://base.com/kvstzffzmp' })];
		const ixvsvafaos = [new Catalog({ connector, semanticId: 'http://base.com/wpttqgpaoe' })];
		const obj = new CatalogItem({
			connector,
			semanticId: "http://example.org/obj",
			product: qctlridesh,
			sku: "afhhtybhqc",
			stockLimitation: 0.8591719,
			offers: gumlrqfopn,
			catalogs: ixvsvafaos
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualProduct = await obj.getOfferedProduct();
		const expectedProduct = qctlridesh;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});

		const actualSku = obj.getSku();
		const expectedSku = "afhhtybhqc";
		await t.test(`#sku`, () => {
			assert.strictEqual(actualSku, expectedSku);
		});

		const actualStockLimitation = obj.getStockLimitation();
		const expectedStockLimitation = 0.8591719;
		await t.test(`#stockLimitation`, () => {
			assert.strictEqual(actualStockLimitation, expectedStockLimitation);
		});

		const actualOffers = await obj.getOfferers();
		const expectedOffers = gumlrqfopn;
		await actualOffers.forEach((actual, i) => {
			t.test(`#offers[${i}]`, () => {
				assert.strictEqual(actual, expectedOffers[i]);
			});
		});

		const actualCatalogs = await obj.getCatalogs();
		const expectedCatalogs = ixvsvafaos;
		await actualCatalogs.forEach((actual, i) => {
			t.test(`#catalogs[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogs[i]);
			});
		});
	});
});
