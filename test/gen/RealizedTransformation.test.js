import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import RealizedConsumptionFlow from "../../lib/RealizedConsumptionFlow.js"
import RealizedTransformation from "../../lib/RealizedTransformation.js"
import RealizedProductionFlow from "../../lib/RealizedProductionFlow.js"
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

test('RealizedTransformation', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		const sgnncglozu = new SKOSConcept({ connector, semanticId: 'http://base.com/fsupmwkqqu' });
		
		
		const azlpfjhnkp = [new RealizedConsumptionFlow({ connector, semanticId: 'http://base.com/yvvpxwpkqz' })];
		const ormrpnwhgt = [new RealizedProductionFlow({ connector, semanticId: 'http://base.com/hjrjhigbrj' })];
		const obj = new RealizedTransformation({
			connector,
			semanticId: "http://example.org/obj",
			transformationType: sgnncglozu,
			startDate: tflfnghxjz,
			endDate: vuowozlizr,
			consumptionFlows: azlpfjhnkp,
			productionFlows: ormrpnwhgt
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualTransformationType = await obj.getTransformationType();
		const expectedTransformationType = sgnncglozu;
		await t.test(`#transformationType`, () => {
			assertSemanticEqual(actualTransformationType, expectedTransformationType);
		});

		const actualStartDate = obj.getBeginDate();
		const expectedStartDate = tflfnghxjz;
		await t.test(`#startDate`, () => {
			assert.strictEqual(actualStartDate, expectedStartDate);
		});

		const actualEndDate = obj.getEndDate();
		const expectedEndDate = vuowozlizr;
		await t.test(`#endDate`, () => {
			assert.strictEqual(actualEndDate, expectedEndDate);
		});

		const actualConsumptionFlows = await obj.getRealizedConsumptionFlows();
		const expectedConsumptionFlows = azlpfjhnkp;
		await actualConsumptionFlows.forEach((actual, i) => {
			t.test(`#consumptionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedConsumptionFlows[i]);
			});
		});

		const actualProductionFlows = await obj.getRealizedProductionFlows();
		const expectedProductionFlows = ormrpnwhgt;
		await actualProductionFlows.forEach((actual, i) => {
			t.test(`#productionFlows[${i}]`, () => {
				assert.strictEqual(actual, expectedProductionFlows[i]);
			});
		});
	});
});
