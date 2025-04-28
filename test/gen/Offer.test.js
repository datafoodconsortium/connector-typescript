import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Price from "../../lib/Price.js"
import Offer from "../../lib/Offer.js"
import CatalogItem from "../../lib/CatalogItem.js"
import CustomerCategory from "../../lib/CustomerCategory.js"
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

test('Offer', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const zlhufswcuw = new CatalogItem({ connector, semanticId: 'http://base.com/bsgmdfxhbs' });
		const xcxnslvwlw = new CustomerCategory({ connector, semanticId: 'http://base.com/tzqutvmpfs' });
		const rwcqthjljs = new Price({ connector });
		
		const obj = new Offer({
			connector,
			semanticId: "http://example.org/obj",
			offeredItem: zlhufswcuw,
			offeredTo: xcxnslvwlw,
			price: rwcqthjljs,
			stockLimitation: 0.86219156
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualOfferedItem = await obj.getOfferedItem();
		const expectedOfferedItem = zlhufswcuw;
		await t.test(`#offeredItem`, () => {
			assertSemanticEqual(actualOfferedItem, expectedOfferedItem);
		});

		const actualOfferedTo = await obj.getCustomerCategory();
		const expectedOfferedTo = xcxnslvwlw;
		await t.test(`#offeredTo`, () => {
			assertSemanticEqual(actualOfferedTo, expectedOfferedTo);
		});

		const expectedPrice = rwcqthjljs;
		const actualPrice = obj.getPrice();
		await t.test(`#price`, () => {
			assertSemanticEqual(actualPrice, expectedPrice);
		});

		const actualStockLimitation = obj.getStockLimitation();
		const expectedStockLimitation = 0.86219156;
		await t.test(`#stockLimitation`, () => {
			assert.strictEqual(actualStockLimitation, expectedStockLimitation);
		});
	});
});
