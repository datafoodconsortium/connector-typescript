import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import TechnicalProduct from "../../lib/TechnicalProduct.js"
import Catalog from "../../lib/Catalog.js"
import Offer from "../../lib/Offer.js"
import CatalogItem from "../../lib/CatalogItem.js"
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
		const psrplnyhko = new TechnicalProduct({ connector, semanticId: 'http://base.com/dqqyxdllab' });
		
		
		const gojcpeeduh = [new Offer({ connector, semanticId: 'http://base.com/utxskiqqmn' })];
		const rzsykhsipd = [new Catalog({ connector, semanticId: 'http://base.com/poxzkixgkv' })];
		const obj = new CatalogItem({
			connector,
			semanticId: "http://example.org/obj",
			product: psrplnyhko,
			sku: "rvdhmpzrab",
			stockLimitation: 0.71107,
			offers: gojcpeeduh,
			catalogs: rzsykhsipd
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualProduct = await obj.getOfferedProduct();
		const expectedProduct = psrplnyhko;
		await t.test(`#product`, () => {
			assertSemanticEqual(actualProduct, expectedProduct);
		});

		const actualSku = obj.getSku();
		const expectedSku = "rvdhmpzrab";
		await t.test(`#sku`, () => {
			assert.strictEqual(actualSku, expectedSku);
		});

		const actualStockLimitation = obj.getStockLimitation();
		const expectedStockLimitation = 0.71107;
		await t.test(`#stockLimitation`, () => {
			assert.strictEqual(actualStockLimitation, expectedStockLimitation);
		});

		const actualOffers = await obj.getOfferers();
		const expectedOffers = gojcpeeduh;
		await actualOffers.forEach((actual, i) => {
			t.test(`#offers[${i}]`, () => {
				assert.strictEqual(actual, expectedOffers[i]);
			});
		});

		const actualCatalogs = await obj.getCatalogs();
		const expectedCatalogs = rzsykhsipd;
		await actualCatalogs.forEach((actual, i) => {
			t.test(`#catalogs[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogs[i]);
			});
		});
	});
});
