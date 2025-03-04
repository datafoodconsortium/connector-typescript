import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import PhysicalCharacteristic from "../../lib/PhysicalCharacteristic.js"
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

test('PhysicalCharacteristic', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const xlpoqfyems = new SKOSConcept({ connector, semanticId: 'http://base.com/esiiyamwxj' });
		
		const zqhuiujwin = new SKOSConcept({ connector, semanticId: 'http://base.com/ssnzsbtdna' });
		const obj = new PhysicalCharacteristic({
			connector,
			unit: xlpoqfyems,
			value: 0.22298849,
			physicalDimension: zqhuiujwin
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = xlpoqfyems;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.22298849;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualPhysicalDimension = await obj.getQuantityDimension();
		const expectedPhysicalDimension = zqhuiujwin;
		await t.test(`#physicalDimension`, () => {
			assertSemanticEqual(actualPhysicalDimension, expectedPhysicalDimension);
		});
	});
});
