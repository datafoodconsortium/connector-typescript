import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Catalog from "../../lib/Catalog.js"
import CatalogItem from "../../lib/CatalogItem.js"
import Enterprise from "../../lib/Enterprise.js"
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

test('Catalog', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const hdcsiiptbg = [new Enterprise({ connector, semanticId: 'http://base.com/tpkdszebjp' })];
		const ryyoatybbg = [new CatalogItem({ connector, semanticId: 'http://base.com/mmydfqaedb' })];
		const obj = new Catalog({
			connector,
			semanticId: "http://example.org/obj",
			maintainers: hdcsiiptbg,
			items: ryyoatybbg
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualMaintainers = await obj.getMaintainers();
		const expectedMaintainers = hdcsiiptbg;
		await actualMaintainers.forEach((actual, i) => {
			t.test(`#maintainers[${i}]`, () => {
				assert.strictEqual(actual, expectedMaintainers[i]);
			});
		});

		const actualItems = await obj.getItems();
		const expectedItems = ryyoatybbg;
		await actualItems.forEach((actual, i) => {
			t.test(`#items[${i}]`, () => {
				assert.strictEqual(actual, expectedItems[i]);
			});
		});
	});
});
