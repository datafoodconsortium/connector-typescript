import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PhysicalCharacteristic from "../../lib/PhysicalCharacteristic.js"
import NutrientCharacteristic from "../../lib/NutrientCharacteristic.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
import DefinedProduct from "../../lib/DefinedProduct.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import CatalogItem from "../../lib/CatalogItem.js"
import TechnicalProduct from "../../lib/TechnicalProduct.js"
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

test('TechnicalProduct', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const pyblacjopb = new SKOSConcept({ connector, semanticId: 'http://base.com/krpzilomxt' });
		const pkjhfvfjsf = new Quantity({ connector });
		
		
		const eckwpgtjui = [new SKOSConcept({ connector, semanticId: 'http://base.com/auqmhoelze' })];
		
		const ciolcshhoh = [new AllergenCharacteristic({ connector })];
		const kzmhdgsijq = [new NutrientCharacteristic({ connector })];
		const qaotrzmsft = [new PhysicalCharacteristic({ connector })];
		const fgxajtcncn = new SKOSConcept({ connector, semanticId: 'http://base.com/qfdnffzqre' });
		const fwwbrjkdjm = [new CatalogItem({ connector, semanticId: 'http://base.com/jjiiyhotwj' })];
		const sxiahxntno = [new SKOSConcept({ connector, semanticId: 'http://base.com/patoqsphtw' })];
		const lipszpkzni = [new SKOSConcept({ connector, semanticId: 'http://base.com/hihbfsgezz' })];
		const fbotljnezn = [new SKOSConcept({ connector, semanticId: 'http://base.com/xazkgqsgtw' })];
		
		const obj = new TechnicalProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "vnehnsnuyk",
			description: "ecdmoxdemo",
			productType: pyblacjopb,
			quantity: pkjhfvfjsf,
			alcoholPercentage: 0.25766128,
			lifetime: "oaguobdhgq",
			claims: eckwpgtjui,
			usageOrStorageConditions: "dntjfsvgcx",
			allergenCharacteristics: ciolcshhoh,
			nutrientCharacteristics: kzmhdgsijq,
			physicalCharacteristics: qaotrzmsft,
			geographicalOrigin: fgxajtcncn,
			catalogItems: fwwbrjkdjm,
			certifications: sxiahxntno,
			natureOrigin: lipszpkzni,
			partOrigin: fbotljnezn,
			images: "xcrhkdqngr"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "vnehnsnuyk";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "ecdmoxdemo";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = pyblacjopb;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = pkjhfvfjsf;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.25766128;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "oaguobdhgq";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = eckwpgtjui;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "dntjfsvgcx";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = ciolcshhoh;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = kzmhdgsijq;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = qaotrzmsft;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = fgxajtcncn;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = fwwbrjkdjm;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = sxiahxntno;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = lipszpkzni;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = fbotljnezn;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});

		const actualImages = obj.getImages();
		const expectedImages = "xcrhkdqngr";
		await t.test(`#images`, () => {
			assert.strictEqual(actualImages, expectedImages);
		});
	});
});
