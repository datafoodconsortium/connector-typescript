import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import AllergenCharacteristic from "../../lib/AllergenCharacteristic.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
import Characteristic from "../../lib/Characteristic.js"
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
		const bzbzotdhmj = new SKOSConcept({ connector, semanticId: 'http://base.com/guxodrkybz' });
		
		const okvofkobsa = new SKOSConcept({ connector, semanticId: 'http://base.com/tcaazxsufn' });
		const obj = new AllergenCharacteristic({
			connector,
			unit: bzbzotdhmj,
			value: 0.5452212,
			allergenDimension: okvofkobsa
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = bzbzotdhmj;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.5452212;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualAllergenDimension = await obj.getQuantityDimension();
		const expectedAllergenDimension = okvofkobsa;
		await t.test(`#allergenDimension`, () => {
			assertSemanticEqual(actualAllergenDimension, expectedAllergenDimension);
		});
	});
});
