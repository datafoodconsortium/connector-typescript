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
		
		
		const jrfufrtcfz = new SKOSConcept({ connector, semanticId: 'http://base.com/jufldttboe' });
		const obj = new Price({
			connector,
			value: 0.5618957,
			vatRate: 0.92129046,
			unit: jrfufrtcfz
		});

		

		const actualValue = obj.getQuantityValue();
		const expectedValue = 0.5618957;
		await t.test(`#value`, () => {
			assert.strictEqual(actualValue, expectedValue);
		});

		const actualVatRate = obj.getVatRate();
		const expectedVatRate = 0.92129046;
		await t.test(`#vatRate`, () => {
			assert.strictEqual(actualVatRate, expectedVatRate);
		});

		const actualUnit = await obj.getQuantityUnit();
		const expectedUnit = jrfufrtcfz;
		await t.test(`#unit`, () => {
			assertSemanticEqual(actualUnit, expectedUnit);
		});
	});
});
