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
		const ogytsxzwzk = new SKOSConcept({ connector, semanticId: 'http://base.com/gktyudauyt' });
		
		const vtnrrqiqws = new SKOSConcept({ connector, semanticId: 'http://base.com/spaopcmvnq' });
		const obj = new AllergenCharacteristic({
			connector,
			unit: ogytsxzwzk,
			value: 0.87858623,
			allergenDimension: vtnrrqiqws
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = ogytsxzwzk;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.87858623;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualAllergenDimension = await obj.getQuantityDimension();
		const expectedAllergenDimension = vtnrrqiqws;
		await t.test(`#allergenDimension`, () => {
			assertSemanticEqual(actualAllergenDimension, expectedAllergenDimension);
		});
	});
});
