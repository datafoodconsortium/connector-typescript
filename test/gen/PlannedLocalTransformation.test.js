import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PlannedLocalTransformation from "../../lib/PlannedLocalTransformation.js"
import PlannedLocalConsumptionFlow from "../../lib/PlannedLocalConsumptionFlow.js"
import PlannedLocalProductionFlow from "../../lib/PlannedLocalProductionFlow.js"
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

test('PlannedLocalTransformation', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const urmlgsqwmu = new SKOSConcept({ connector, semanticId: 'http://base.com/pezgaedexo' });
		
		
		
		const ssyeolifzo = [new PlannedLocalConsumptionFlow({ connector, semanticId: 'http://base.com/pxjzmvlplk' })];
		const xhmkxwguxl = [new PlannedLocalProductionFlow({ connector, semanticId: 'http://base.com/awtvizuxuj' })];
		const obj = new PlannedLocalTransformation({
			connector,
			semanticId: "http://example.org/obj",
			transformationType: urmlgsqwmu,
			cost: 0.2797376,
			startDate: cgxcnvwehu,
			endDate: goqzzxuuen,
			consumptionFlows: ssyeolifzo,
			productionFlows: xhmkxwguxl
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualTransformationType = await obj.getTransformationType();
		const expectedTransformationType = urmlgsqwmu;
		await t.test(`#transformationType`, () => {
			assertSemanticEqual(actualTransformationType, expectedTransformationType);
		});

		const actualCost = obj.getCost();
		const expectedCost = 0.2797376;
		await t.test(`#cost`, () => {
			assert.strictEqual(actualCost, expectedCost);
		});

		const actualStartDate = obj.getBeginDate();
		const expectedStartDate = cgxcnvwehu;
		await t.test(`#startDate`, () => {
			assert.strictEqual(actualStartDate, expectedStartDate);
		});

		const actualEndDate = obj.getEndDate();
		const expectedEndDate = goqzzxuuen;
		await t.test(`#endDate`, () => {
			assert.strictEqual(actualEndDate, expectedEndDate);
		});

		const actualConsumptionFlows = await obj.getPlannedLocalConsumptionFlows();
		const expectedConsumptionFlows = ssyeolifzo;
		await actualConsumptionFlows.forEach((actual, i) => {
			t.test(`#consumptionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedConsumptionFlows[i]);
			});
		});

		const actualProductionFlows = await obj.getPlannedLocalProductionFlows();
		const expectedProductionFlows = xhmkxwguxl;
		await actualProductionFlows.forEach((actual, i) => {
			t.test(`#productionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedProductionFlows[i]);
			});
		});
	});
});
