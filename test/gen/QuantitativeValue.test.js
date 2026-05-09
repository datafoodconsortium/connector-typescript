import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import Price from "../../lib/Price.js"
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

test('QuantitativeValue', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const buddnfaikl = new SKOSConcept({ connector, semanticId: 'http://base.com/uwlvnphlpv' });
		
		const obj = new QuantitativeValue({
			connector,
			unit: buddnfaikl,
			value: 0.005738318
		});

		

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = buddnfaikl;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.005738318;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});
	});
});
