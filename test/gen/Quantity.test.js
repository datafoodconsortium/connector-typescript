import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Quantity from "../../lib/Quantity.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
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

test('Quantity', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const dnnuedwucu = new SKOSConcept({ connector, semanticId: 'http://base.com/hkgzbqzhhv' });
		
		const obj = new Quantity({
			connector,
			unit: dnnuedwucu,
			value: 0.061743915
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = dnnuedwucu;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.061743915;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});
	});
});
