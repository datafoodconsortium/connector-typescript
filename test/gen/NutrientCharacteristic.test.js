import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import NutrientCharacteristic from "../../lib/NutrientCharacteristic.js"
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

test('NutrientCharacteristic', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const sbudlkfxsx = new SKOSConcept({ connector, semanticId: 'http://base.com/xoqrrdfiwd' });
		
		const fidlwdbtth = new SKOSConcept({ connector, semanticId: 'http://base.com/yddfckpqsa' });
		const obj = new NutrientCharacteristic({
			connector,
			unit: sbudlkfxsx,
			value: 0.8498699,
			nutrientDimension: fidlwdbtth
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = sbudlkfxsx;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.8498699;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualNutrientDimension = await obj.getQuantityDimension();
		const expectedNutrientDimension = fidlwdbtth;
		await t.test(`#nutrientDimension`, () => {
			assertSemanticEqual(actualNutrientDimension, expectedNutrientDimension);
		});
	});
});
