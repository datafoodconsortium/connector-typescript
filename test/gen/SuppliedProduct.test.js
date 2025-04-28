import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import DefinedProduct from "../../lib/DefinedProduct.js"
import Quantity from "../../lib/Quantity.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import NutrientCharacteristic from "../../lib/NutrientCharacteristic.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import CatalogItem from "../../lib/CatalogItem.js"
import PhysicalCharacteristic from "../../lib/PhysicalCharacteristic.js"
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

test('SuppliedProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const bdptzahqny = new SKOSConcept({ connector, semanticId: 'http://base.com/tfestdrnhw' });
		const idrrgmzfos = new Quantity({ connector });
		
		
		const ysqowhtmfo = [new SKOSConcept({ connector, semanticId: 'http://base.com/evpznfrbqr' })];
		
		const xoxsnxegfg = [new AllergenCharacteristic({ connector })];
		const aghkkzpseb = [new NutrientCharacteristic({ connector })];
		const ryuwwnebhq = [new PhysicalCharacteristic({ connector })];
		const yzaxrnxosv = new SKOSConcept({ connector, semanticId: 'http://base.com/vbjssxydoh' });
		const xucirghlrc = [new CatalogItem({ connector, semanticId: 'http://base.com/ohmndagent' })];
		const pbjrmctjkk = [new SKOSConcept({ connector, semanticId: 'http://base.com/howfejhmyj' })];
		const jqwxrsqcqq = [new SKOSConcept({ connector, semanticId: 'http://base.com/nyurjnawua' })];
		const mcyjxklsia = [new SKOSConcept({ connector, semanticId: 'http://base.com/hfqjghvgky' })];
		
		
		const obj = new SuppliedProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "ihpommmqwb",
			description: "npfgwjzruk",
			productType: bdptzahqny,
			quantity: idrrgmzfos,
			alcoholPercentage: 0.06546688,
			lifetime: "uvswhkxcsv",
			claims: ysqowhtmfo,
			usageOrStorageConditions: "yabcmhstvu",
			allergenCharacteristics: xoxsnxegfg,
			nutrientCharacteristics: aghkkzpseb,
			physicalCharacteristics: ryuwwnebhq,
			geographicalOrigin: yzaxrnxosv,
			catalogItems: xucirghlrc,
			certifications: pbjrmctjkk,
			natureOrigin: jqwxrsqcqq,
			partOrigin: mcyjxklsia,
			totalTheoreticalStock: 0.73022735,
			images: "igfvjrnxhp"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "ihpommmqwb";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "npfgwjzruk";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = bdptzahqny;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = idrrgmzfos;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.06546688;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "uvswhkxcsv";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = ysqowhtmfo;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "yabcmhstvu";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = xoxsnxegfg;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = aghkkzpseb;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = ryuwwnebhq;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = yzaxrnxosv;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = xucirghlrc;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = pbjrmctjkk;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = jqwxrsqcqq;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = mcyjxklsia;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});

		const actualTotalTheoreticalStock = obj.getTotalTheoreticalStock();
		const expectedTotalTheoreticalStock = 0.73022735;
		await t.test(`#totalTheoreticalStock`, () => {
			assert.strictEqual(actualTotalTheoreticalStock, expectedTotalTheoreticalStock);
		});

		const actualImages = obj.getImages();
		const expectedImages = "igfvjrnxhp";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});
	});
});
