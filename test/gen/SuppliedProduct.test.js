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
		
		
		const gfkbelwfwr = new SKOSConcept({ connector, semanticId: 'http://base.com/szsufcrmyi' });
		const nmboynlwpp = new Quantity({ connector });
		
		
		const vttguusiet = [new SKOSConcept({ connector, semanticId: 'http://base.com/uzchtljtye' })];
		
		const bupfmmqqkk = [new AllergenCharacteristic({ connector })];
		const pevifzymlf = [new NutrientCharacteristic({ connector })];
		const wmdbsxkjlm = [new PhysicalCharacteristic({ connector })];
		const sobplzjvkp = new SKOSConcept({ connector, semanticId: 'http://base.com/babhkeqoal' });
		const srqoxztarp = [new CatalogItem({ connector, semanticId: 'http://base.com/hrkebfzxsb' })];
		const voudvchgux = [new SKOSConcept({ connector, semanticId: 'http://base.com/maumagnmqb' })];
		const phpuxxcnpr = [new SKOSConcept({ connector, semanticId: 'http://base.com/lqwjpjtxwb' })];
		const kvirvnrfjf = [new SKOSConcept({ connector, semanticId: 'http://base.com/uevjruxqig' })];
		
		
		const obj = new SuppliedProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "ioqmsowexn",
			description: "viidrzolhh",
			productType: gfkbelwfwr,
			quantity: nmboynlwpp,
			alcoholPercentage: 0.8295435,
			lifetime: "utkclizwuk",
			claims: vttguusiet,
			usageOrStorageConditions: "bgdnkjdggm",
			allergenCharacteristics: bupfmmqqkk,
			nutrientCharacteristics: pevifzymlf,
			physicalCharacteristics: wmdbsxkjlm,
			geographicalOrigin: sobplzjvkp,
			catalogItems: srqoxztarp,
			certifications: voudvchgux,
			natureOrigin: phpuxxcnpr,
			partOrigin: kvirvnrfjf,
			totalTheoreticalStock: 0.4190001,
			images: "rmnepaoabu"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "ioqmsowexn";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "viidrzolhh";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = gfkbelwfwr;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = nmboynlwpp;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.8295435;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "utkclizwuk";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = vttguusiet;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "bgdnkjdggm";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = bupfmmqqkk;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = pevifzymlf;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = wmdbsxkjlm;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = sobplzjvkp;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = srqoxztarp;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = voudvchgux;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = phpuxxcnpr;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = kvirvnrfjf;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});

		const actualTotalTheoreticalStock = obj.getTotalTheoreticalStock();
		const expectedTotalTheoreticalStock = 0.4190001;
		await t.test(`#totalTheoreticalStock`, () => {
			assert.strictEqual(actualTotalTheoreticalStock, expectedTotalTheoreticalStock);
		});

		const actualImages = obj.getImages();
		const expectedImages = "rmnepaoabu";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});
	});
});
