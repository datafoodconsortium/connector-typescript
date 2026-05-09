import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PhysicalCharacteristic from "../../lib/PhysicalCharacteristic.js"
import NutrientCharacteristic from "../../lib/NutrientCharacteristic.js"
import LocalizedProduct from "../../lib/LocalizedProduct.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import DefinedProduct from "../../lib/DefinedProduct.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import CatalogItem from "../../lib/CatalogItem.js"
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

test('SuppliedProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const wbxdnxjlwy = new SKOSConcept({ connector, semanticId: 'http://base.com/soflgybmuo' });
		const wtbuitwowk = new Quantity({ connector });
		
		
		const pfnbnrbule = [new SKOSConcept({ connector, semanticId: 'http://base.com/ancndqzckh' })];
		
		const ubqrxgrxgi = [new AllergenCharacteristic({ connector })];
		const ooxklmsjme = [new NutrientCharacteristic({ connector })];
		const juhplawpes = [new PhysicalCharacteristic({ connector })];
		const fldpmmqjza = new SKOSConcept({ connector, semanticId: 'http://base.com/gpuugejzpc' });
		const otoqokesko = [new CatalogItem({ connector, semanticId: 'http://base.com/itfeiuyrxo' })];
		const yilnapqmts = [new SKOSConcept({ connector, semanticId: 'http://base.com/fpapsmufnt' })];
		const xuayajtjuy = [new SKOSConcept({ connector, semanticId: 'http://base.com/wpnlbftusz' })];
		const etaxgimiyn = [new SKOSConcept({ connector, semanticId: 'http://base.com/dieomfyzpx' })];
		
		
		const npjwevitgl = [new LocalizedProduct({ connector, semanticId: 'http://base.com/wqaoydqspb' })];
		const obj = new SuppliedProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "rniipcqezl",
			description: "aqniljammy",
			productType: wbxdnxjlwy,
			quantity: wtbuitwowk,
			alcoholPercentage: 0.76732403,
			lifetime: "fwuedlzqdg",
			claims: pfnbnrbule,
			usageOrStorageConditions: "kmmzjqhqyv",
			allergenCharacteristics: ubqrxgrxgi,
			nutrientCharacteristics: ooxklmsjme,
			physicalCharacteristics: juhplawpes,
			geographicalOrigin: fldpmmqjza,
			catalogItems: otoqokesko,
			certifications: yilnapqmts,
			natureOrigin: xuayajtjuy,
			partOrigin: etaxgimiyn,
			totalTheoreticalStock: 0.57141554,
			images: "jhpgfwromy",
			localizedProducts: npjwevitgl
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "rniipcqezl";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "aqniljammy";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = wbxdnxjlwy;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = wtbuitwowk;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.76732403;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "fwuedlzqdg";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = pfnbnrbule;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "kmmzjqhqyv";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = ubqrxgrxgi;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = ooxklmsjme;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = juhplawpes;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = fldpmmqjza;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = otoqokesko;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = yilnapqmts;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = xuayajtjuy;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = etaxgimiyn;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});

		const actualTotalTheoreticalStock = obj.getTotalTheoreticalStock();
		const expectedTotalTheoreticalStock = 0.57141554;
		await t.test(`#totalTheoreticalStock`, () => {
			assert.strictEqual(actualTotalTheoreticalStock, expectedTotalTheoreticalStock);
		});

		const actualImages = obj.getImages();
		const expectedImages = "jhpgfwromy";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});

		const actualLocalizedProducts = await obj.getLocalizedProducts();
		const expectedLocalizedProducts = npjwevitgl;
		await actualLocalizedProducts.forEach((actual, i) => {
			t.test(`#localizedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizedProducts[i]);
			});
		});
	});
});
