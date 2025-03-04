import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import DefinedProduct from "../../lib/DefinedProduct.js"
import Quantity from "../../lib/Quantity.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import NutrientCharacteristic from "../../lib/NutrientCharacteristic.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
import TechnicalProduct from "../../lib/TechnicalProduct.js"
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

test('TechnicalProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const zfpenctjfr = new SKOSConcept({ connector, semanticId: 'http://base.com/iwhzvnaskf' });
		const ihfzcyuovi = new Quantity({ connector });
		
		
		const krzqbcifud = [new SKOSConcept({ connector, semanticId: 'http://base.com/hpoaabhqwo' })];
		
		const fyyhsudnst = [new AllergenCharacteristic({ connector })];
		const jdqlmzstdj = [new NutrientCharacteristic({ connector })];
		const thdwcuhevv = [new PhysicalCharacteristic({ connector })];
		const ebfmoncose = new SKOSConcept({ connector, semanticId: 'http://base.com/qduwgfhcpm' });
		const gdbslropig = [new CatalogItem({ connector, semanticId: 'http://base.com/rurmpqxfao' })];
		const ugzeoglzys = [new SKOSConcept({ connector, semanticId: 'http://base.com/yulvxouyhh' })];
		const mplbhapydw = [new SKOSConcept({ connector, semanticId: 'http://base.com/mnyeqqcxqm' })];
		const ziojrnowvy = [new SKOSConcept({ connector, semanticId: 'http://base.com/feddjivyad' })];
		const obj = new TechnicalProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "nggozvniyn",
			description: "eqnjvfnfls",
			productType: zfpenctjfr,
			quantity: ihfzcyuovi,
			alcoholPercentage: 0.88432854,
			lifetime: "gjiuiovxej",
			claims: krzqbcifud,
			usageOrStorageConditions: "noyslodlxr",
			allergenCharacteristics: fyyhsudnst,
			nutrientCharacteristics: jdqlmzstdj,
			physicalCharacteristics: thdwcuhevv,
			geographicalOrigin: ebfmoncose,
			catalogItems: gdbslropig,
			certifications: ugzeoglzys,
			natureOrigin: mplbhapydw,
			partOrigin: ziojrnowvy
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "nggozvniyn";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "eqnjvfnfls";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = zfpenctjfr;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = ihfzcyuovi;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.88432854;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "gjiuiovxej";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = krzqbcifud;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "noyslodlxr";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = fyyhsudnst;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = jdqlmzstdj;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = thdwcuhevv;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = ebfmoncose;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = gdbslropig;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = ugzeoglzys;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = mplbhapydw;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = ziojrnowvy;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});
	});
});
