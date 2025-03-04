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
		
		
		const lvqgfjxvoi = new SKOSConcept({ connector, semanticId: 'http://base.com/qsosznfzca' });
		const qmxhtowwil = new Quantity({ connector });
		
		
		const ebqdlfssug = [new SKOSConcept({ connector, semanticId: 'http://base.com/lpexayamtf' })];
		
		const caevxaqqll = [new AllergenCharacteristic({ connector })];
		const ixzcwtowip = [new NutrientCharacteristic({ connector })];
		const leykpscdss = [new PhysicalCharacteristic({ connector })];
		const emwecqigvm = new SKOSConcept({ connector, semanticId: 'http://base.com/cbqmjmsufh' });
		const tabrcsohke = [new CatalogItem({ connector, semanticId: 'http://base.com/eqvycwuqoq' })];
		const jortmdzikm = [new SKOSConcept({ connector, semanticId: 'http://base.com/bedrlyafud' })];
		const mcgduebfam = [new SKOSConcept({ connector, semanticId: 'http://base.com/raxghrpbqw' })];
		const yycwfnwzey = [new SKOSConcept({ connector, semanticId: 'http://base.com/rzalappvwo' })];
		
		
		const obj = new SuppliedProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "isnvzexfut",
			description: "zkgitwixwm",
			productType: lvqgfjxvoi,
			quantity: qmxhtowwil,
			alcoholPercentage: 0.7789166,
			lifetime: "jvdvccebop",
			claims: ebqdlfssug,
			usageOrStorageConditions: "ewupncgorn",
			allergenCharacteristics: caevxaqqll,
			nutrientCharacteristics: ixzcwtowip,
			physicalCharacteristics: leykpscdss,
			geographicalOrigin: emwecqigvm,
			catalogItems: tabrcsohke,
			certifications: jortmdzikm,
			natureOrigin: mcgduebfam,
			partOrigin: yycwfnwzey,
			totalTheoreticalStock: 0.39105082,
			images: "yqfbtwhxrh"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "isnvzexfut";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "zkgitwixwm";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = lvqgfjxvoi;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = qmxhtowwil;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.7789166;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "jvdvccebop";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = ebqdlfssug;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "ewupncgorn";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = caevxaqqll;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = ixzcwtowip;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = leykpscdss;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = emwecqigvm;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = tabrcsohke;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = jortmdzikm;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = mcgduebfam;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = yycwfnwzey;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});

		const actualTotalTheoreticalStock = obj.getTotalTheoreticalStock();
		const expectedTotalTheoreticalStock = 0.39105082;
		await t.test(`#totalTheoreticalStock`, () => {
			assert.strictEqual(actualTotalTheoreticalStock, expectedTotalTheoreticalStock);
		});

		const actualImages = obj.getImages();
		const expectedImages = "yqfbtwhxrh";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});
	});
});
