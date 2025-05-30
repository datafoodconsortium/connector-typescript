import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PlannedTransformation from "../../lib/PlannedTransformation.js"
import SKOSConcept from "../../lib/SKOSConcept.js"
import PlannedProductionFlow from "../../lib/PlannedProductionFlow.js"
import PlannedConsumptionFlow from "../../lib/PlannedConsumptionFlow.js"
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

test('PlannedTransformation', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const efoidhartf = new SKOSConcept({ connector, semanticId: 'http://base.com/ugoqlfqeaa' });
		const ltmhegmkwj = [new PlannedConsumptionFlow({ connector, semanticId: 'http://base.com/xhrliagzcg' })];
		const ihngrjwyqd = [new PlannedProductionFlow({ connector, semanticId: 'http://base.com/rsiirynomz' })];
		const obj = new PlannedTransformation({
			connector,
			semanticId: "http://example.org/obj",
			transformationType: efoidhartf,
			consumptionFlows: ltmhegmkwj,
			productionFlows: ihngrjwyqd
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualTransformationType = await obj.getTransformationType();
		const expectedTransformationType = efoidhartf;
		await t.test(`#transformationType`, () => {
			assertSemanticEqual(actualTransformationType, expectedTransformationType);
		});

		const actualConsumptionFlows = await obj.getPlannedConsumptionFlows();
		const expectedConsumptionFlows = ltmhegmkwj;
		await actualConsumptionFlows.forEach((actual, i) => {
			t.test(`#consumptionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedConsumptionFlows[i]);
			});
		});

		const actualProductionFlows = await obj.getPlannedProductionFlows();
		const expectedProductionFlows = ihngrjwyqd;
		await actualProductionFlows.forEach((actual, i) => {
			t.test(`#productionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedProductionFlows[i]);
			});
		});
	});
});
