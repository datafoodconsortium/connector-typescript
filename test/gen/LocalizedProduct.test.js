import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PlannedLocalConsumptionFlow from "../../lib/PlannedLocalConsumptionFlow.js"
import LocalizedProduct from "../../lib/LocalizedProduct.js"
import PhysicalProduct from "../../lib/PhysicalProduct.js"
import PlannedLocalProductionFlow from "../../lib/PlannedLocalProductionFlow.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import TheoreticalStock from "../../lib/TheoreticalStock.js"
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

test('LocalizedProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const gaexzxzdkb = new Quantity({ connector });
		
		
		const rkqitdtvtc = [new SuppliedProduct({ connector, semanticId: 'http://base.com/mhnnzycdom' })];
		const xqixvaortd = [new PhysicalProduct({ connector, semanticId: 'http://base.com/ekfaowtfdg' })];
		const ihyhuwxgye = [new TheoreticalStock({ connector, semanticId: 'http://base.com/xaikcvqxgi' })];
		const ddsyjgmwuf = [new PlannedLocalConsumptionFlow({ connector, semanticId: 'http://base.com/epfjycokvn' })];
		const ktmeoapzuf = [new PlannedLocalProductionFlow({ connector, semanticId: 'http://base.com/kdiqxhnrci' })];
		const obj = new LocalizedProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "znvvrbdqdp",
			description: "lyamugugqd",
			quantity: gaexzxzdkb,
			images: "ndvariybgu",
			cost: 0.5849027,
			suppliedProducts: rkqitdtvtc,
			physicalProducts: xqixvaortd,
			theoreticalStocks: ihyhuwxgye,
			plannedLocalConsumptionFlows: ddsyjgmwuf,
			plannedLocalProductionFlows: ktmeoapzuf
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "znvvrbdqdp";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "lyamugugqd";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const expectedQuantity = gaexzxzdkb;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualImages = obj.getImages();
		const expectedImages = "ndvariybgu";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});

		const actualCost = obj.getCost();
		const expectedCost = 0.5849027;
		await t.test(`#cost`, () => {
			assert.strictEqual(actualCost, expectedCost);
		});

		const actualSuppliedProducts = await obj.getSuppliedProducts();
		const expectedSuppliedProducts = rkqitdtvtc;
		await actualSuppliedProducts.forEach((actual, i) => {
			t.test(`#suppliedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedSuppliedProducts[i]);
			});
		});

		const actualPhysicalProducts = await obj.getPhysicalProducts();
		const expectedPhysicalProducts = xqixvaortd;
		await actualPhysicalProducts.forEach((actual, i) => {
			t.test(`#physicalProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedPhysicalProducts[i]);
			});
		});

		const actualTheoreticalStocks = await obj.getTheoreticalStocks();
		const expectedTheoreticalStocks = ihyhuwxgye;
		await actualTheoreticalStocks.forEach((actual, i) => {
			t.test(`#theoreticalStocks[${i}]`, () => {
				assert.strictEqual(actual, expectedTheoreticalStocks[i]);
			});
		});

		const actualPlannedLocalConsumptionFlows = await obj.getPlannedLocalConsumptionFlows();
		const expectedPlannedLocalConsumptionFlows = ddsyjgmwuf;
		await actualPlannedLocalConsumptionFlows.forEach((actual, i) => {
			t.test(`#plannedLocalConsumptionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedPlannedLocalConsumptionFlows[i]);
			});
		});

		const actualPlannedLocalProductionFlows = await obj.getPlannedLocalProductionFlows();
		const expectedPlannedLocalProductionFlows = ktmeoapzuf;
		await actualPlannedLocalProductionFlows.forEach((actual, i) => {
			t.test(`#plannedLocalProductionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedPlannedLocalProductionFlows[i]);
			});
		});
	});
});
