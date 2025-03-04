import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Price from "../../lib/Price.js"
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

test('Price', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const depluotsin = new SKOSConcept({ connector, semanticId: 'http://base.com/pzckzqssyn' });
		const obj = new Price({
			connector,
			value: 0.54602724,
			vatRate: 0.37368,
			unit: depluotsin
		});

		

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.54602724;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualVatRate = obj.getVatRate();
		const expectedVatRate = 0.37368;
		await t.test(`#vatRate`, () => {
			assert.strictEqual(actualVatRate, expectedVatRate);
		});

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = depluotsin;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});
	});
});
