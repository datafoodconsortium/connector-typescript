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
		
		
		const icvidlqwmx = new SKOSConcept({ connector, semanticId: 'http://base.com/pykjbuwlsp' });
		const mdfvsqrnrb = new Quantity({ connector });
		
		
		const ylslpkiale = [new SKOSConcept({ connector, semanticId: 'http://base.com/zkidxkfwqt' })];
		
		const eznlzrjajw = [new AllergenCharacteristic({ connector })];
		const svwcxqtnaf = [new NutrientCharacteristic({ connector })];
		const dqhrkygank = [new PhysicalCharacteristic({ connector })];
		const qzxydugtct = new SKOSConcept({ connector, semanticId: 'http://base.com/irzrywpuja' });
		const ynmqujndtl = [new CatalogItem({ connector, semanticId: 'http://base.com/uuqhjaxpby' })];
		const zqcnjxmoxf = [new SKOSConcept({ connector, semanticId: 'http://base.com/rcfbvbxgjp' })];
		const tmctlkikbk = [new SKOSConcept({ connector, semanticId: 'http://base.com/mxnmknswds' })];
		const zlldiakcxp = [new SKOSConcept({ connector, semanticId: 'http://base.com/tljelfednb' })];
		const obj = new TechnicalProduct({
			connector,
			semanticId: "http://example.org/obj",
			name: "qnxiqkuasr",
			description: "cmpewzuwsc",
			productType: icvidlqwmx,
			quantity: mdfvsqrnrb,
			alcoholPercentage: 0.8880667,
			lifetime: "fcvbdbenft",
			claims: ylslpkiale,
			usageOrStorageConditions: "wxpcmbthup",
			allergenCharacteristics: eznlzrjajw,
			nutrientCharacteristics: svwcxqtnaf,
			physicalCharacteristics: dqhrkygank,
			geographicalOrigin: qzxydugtct,
			catalogItems: ynmqujndtl,
			certifications: zqcnjxmoxf,
			natureOrigin: tmctlkikbk,
			partOrigin: zlldiakcxp
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "qnxiqkuasr";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "cmpewzuwsc";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualProductType = await obj.getProductType();
		const expectedProductType = icvidlqwmx;
		await t.test(`#productType`, () => {
			assertSemanticEqual(actualProductType, expectedProductType);
		});

		const expectedQuantity = mdfvsqrnrb;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualAlcoholPercentage = obj.getAlcoholPercentage();
		const expectedAlcoholPercentage = 0.8880667;
		await t.test(`#alcoholPercentage`, () => {
			assert.strictEqual(actualAlcoholPercentage, expectedAlcoholPercentage);
		});

		const actualLifetime = obj.getLifetime();
		const expectedLifetime = "fcvbdbenft";
		await t.test(`#lifetime`, () => {
			assert.strictEqual(actualLifetime, expectedLifetime);
		});

		const actualClaims = await obj.getClaims();
		const expectedClaims = ylslpkiale;
		await actualClaims.forEach((actual, i) => {
			t.test(`#claims[${i}]`, () => {
				assert.strictEqual(actual, expectedClaims[i]);
			});
		});

		const actualUsageOrStorageConditions = obj.getUsageOrStorageConditions();
		const expectedUsageOrStorageConditions = "wxpcmbthup";
		await t.test(`#usageOrStorageConditions`, () => {
			assert.strictEqual(actualUsageOrStorageConditions, expectedUsageOrStorageConditions);
		});

		const expectedAllergenCharacteristics = eznlzrjajw;
		const actualAllergenCharacteristics = await obj.getAllergenCharacteristics();
		await actualAllergenCharacteristics.forEach((actual, i) => {
			t.test(`#allergenCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedAllergenCharacteristics[i]);
			});
		});

		const expectedNutrientCharacteristics = svwcxqtnaf;
		const actualNutrientCharacteristics = await obj.getNutrientCharacteristics();
		await actualNutrientCharacteristics.forEach((actual, i) => {
			t.test(`#nutrientCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedNutrientCharacteristics[i]);
			});
		});

		const expectedPhysicalCharacteristics = dqhrkygank;
		const actualPhysicalCharacteristics = await obj.getPhysicalCharacteristics();
		await actualPhysicalCharacteristics.forEach((actual, i) => {
			t.test(`#physicalCharacteristics[${i}]`, () => {
				assertSemanticEqual(actual, expectedPhysicalCharacteristics[i]);
			});
		});

		const actualGeographicalOrigin = await obj.getGeographicalOrigin();
		const expectedGeographicalOrigin = qzxydugtct;
		await t.test(`#geographicalOrigin`, () => {
			assertSemanticEqual(actualGeographicalOrigin, expectedGeographicalOrigin);
		});

		const actualCatalogItems = await obj.getCatalogItems();
		const expectedCatalogItems = ynmqujndtl;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualCertifications = await obj.getCertifications();
		const expectedCertifications = zqcnjxmoxf;
		await actualCertifications.forEach((actual, i) => {
			t.test(`#certifications[${i}]`, () => {
				assert.strictEqual(actual, expectedCertifications[i]);
			});
		});

		const actualNatureOrigin = await obj.getNatureOrigin();
		const expectedNatureOrigin = tmctlkikbk;
		await actualNatureOrigin.forEach((actual, i) => {
			t.test(`#natureOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedNatureOrigin[i]);
			});
		});

		const actualPartOrigin = await obj.getPartOrigin();
		const expectedPartOrigin = zlldiakcxp;
		await actualPartOrigin.forEach((actual, i) => {
			t.test(`#partOrigin[${i}]`, () => {
				assert.strictEqual(actual, expectedPartOrigin[i]);
			});
		});
	});
});
