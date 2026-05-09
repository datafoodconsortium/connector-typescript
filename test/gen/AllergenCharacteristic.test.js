import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Characteristic from "../../lib/Characteristic.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
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

test('AllergenCharacteristic', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const ersnihgiww = new SKOSConcept({ connector, semanticId: 'http://base.com/yqvcmxxbst' });
		
		const mtfalqlydt = new SKOSConcept({ connector, semanticId: 'http://base.com/wndgfhinfy' });
		const obj = new AllergenCharacteristic({
			connector,
			unit: ersnihgiww,
			value: 0.49598032,
			allergenDimension: mtfalqlydt
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = ersnihgiww;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.49598032;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualAllergenDimension = await obj.getQuantityDimension();
		const expectedAllergenDimension = mtfalqlydt;
		await t.test(`#allergenDimension`, () => {
			assertSemanticEqual(actualAllergenDimension, expectedAllergenDimension);
		});
	});
});
