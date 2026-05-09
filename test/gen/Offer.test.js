import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import CustomerCategory from "../../lib/CustomerCategory.js"
import Offer from "../../lib/Offer.js"
import Price from "../../lib/Price.js"
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

test('Offer', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const jwnfnwewaq = new CatalogItem({ connector, semanticId: 'http://base.com/cnyhdrlbzi' });
		const hxuwlqijuh = new CustomerCategory({ connector, semanticId: 'http://base.com/hpidoestia' });
		const dtufdrbjah = new Price({ connector });
		
		const obj = new Offer({
			connector,
			semanticId: "http://example.org/obj",
			offeredItem: jwnfnwewaq,
			offeredTo: hxuwlqijuh,
			price: dtufdrbjah,
			stockLimitation: 0.22915053
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualOfferedItem = await obj.getOfferedItem();
		const expectedOfferedItem = jwnfnwewaq;
		await t.test(`#offeredItem`, () => {
			assertSemanticEqual(actualOfferedItem, expectedOfferedItem);
		});

		const actualOfferedTo = await obj.getCustomerCategory();
		const expectedOfferedTo = hxuwlqijuh;
		await t.test(`#offeredTo`, () => {
			assertSemanticEqual(actualOfferedTo, expectedOfferedTo);
		});

		const expectedPrice = dtufdrbjah;
		const actualPrice = obj.getPrice();
		await t.test(`#price`, () => {
			assertSemanticEqual(actualPrice, expectedPrice);
		});

		const actualStockLimitation = obj.getStockLimitation();
		const expectedStockLimitation = 0.22915053;
		await t.test(`#stockLimitation`, () => {
			assert.strictEqual(actualStockLimitation, expectedStockLimitation);
		});
	});
});
