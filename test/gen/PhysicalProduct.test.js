import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import LocalizedProduct from "../../lib/LocalizedProduct.js"
import ProductBatch from "../../lib/ProductBatch.js"
import PhysicalProduct from "../../lib/PhysicalProduct.js"
import RealStock from "../../lib/RealStock.js"
import Quantity from "../../lib/Quantity.js"
import RealizedConsumptionFlow from "../../lib/RealizedConsumptionFlow.js"
import RealizedProductionFlow from "../../lib/RealizedProductionFlow.js"
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

test('PhysicalProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const omuunyqluu = new Quantity({ connector });
		
		const dungfxopbk = [new LocalizedProduct({ connector, semanticId: 'http://base.com/jrtcyubbwv' })];
		const tqmcdmhggy = [new ProductBatch({ connector, semanticId: 'http://base.com/agneddboss' })];
		const rzgcpidkns = [new RealStock({ connector, semanticId: 'http://base.com/azbyhhkekr' })];
		const vgejjmkfdi = [new RealizedConsumptionFlow({ connector, semanticId: 'http://base.com/yamjlmvsyv' })];
		const ygryjwdnkf = [new RealizedProductionFlow({ connector, semanticId: 'http://base.com/jiolwwgzyb' })];
		const obj = new PhysicalProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "kaaxzjxsxy",
			description: "wmnuzzahol",
			quantity: omuunyqluu,
			images: "fgaxzhvwqg",
			localizedProducts: dungfxopbk,
			productBatches: tqmcdmhggy,
			realStocks: rzgcpidkns,
			realizedConsumptionFlows: vgejjmkfdi,
			realizedProductionFlows: ygryjwdnkf
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "kaaxzjxsxy";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "wmnuzzahol";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const expectedQuantity = omuunyqluu;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualImages = obj.getImages();
		const expectedImages = "fgaxzhvwqg";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});

		const actualLocalizedProducts = await obj.getLocalizedProducts();
		const expectedLocalizedProducts = dungfxopbk;
		await actualLocalizedProducts.forEach((actual, i) => {
			t.test(`#localizedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizedProducts[i]);
			});
		});

		const actualProductBatches = await obj.getProductBatches();
		const expectedProductBatches = tqmcdmhggy;
		await actualProductBatches.forEach((actual, i) => {
			t.test(`#productBatches[${i}]`, () => {
				assert.strictEqual(actual, expectedProductBatches[i]);
			});
		});

		const actualRealStocks = await obj.getRealStocks();
		const expectedRealStocks = rzgcpidkns;
		await actualRealStocks.forEach((actual, i) => {
			t.test(`#realStocks[${i}]`, () => {
				assert.strictEqual(actual, expectedRealStocks[i]);
			});
		});

		const actualRealizedConsumptionFlows = await obj.getRealizedConsumptionFlows();
		const expectedRealizedConsumptionFlows = vgejjmkfdi;
		await actualRealizedConsumptionFlows.forEach((actual, i) => {
			t.test(`#realizedConsumptionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedRealizedConsumptionFlows[i]);
			});
		});

		const actualRealizedProductionFlows = await obj.getRealizedProductionFlows();
		const expectedRealizedProductionFlows = ygryjwdnkf;
		await actualRealizedProductionFlows.forEach((actual, i) => {
			t.test(`#realizedProductionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedRealizedProductionFlows[i]);
			});
		});
	});
});
