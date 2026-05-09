import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import VirtualPlace from "../../lib/VirtualPlace.js"
import SaleSession from "../../lib/SaleSession.js"
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

test('VirtualPlace', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const hgoobclnor = [new SaleSession({ connector, semanticId: 'http://base.com/joobvgrakg' })];
		
		const obj = new VirtualPlace({
			connector,
			semanticId: "http://example.org/obj",
			name: "umpobkgsvq",
			description: "vseqsbjgxg",
			hostedSaleSessions: hgoobclnor,
			urls: "wdsbedebox"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "umpobkgsvq";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "vseqsbjgxg";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualHostedSaleSessions = await obj.getHostedSaleSessions();
		const expectedHostedSaleSessions = hgoobclnor;
		await actualHostedSaleSessions.forEach((actual, i) => {
			t.test(`#hostedSaleSessions[${i}]`, () => {
				assert.strictEqual(actual, expectedHostedSaleSessions[i]);
			});
		});

		const actualUrls = obj.getUrls();
		const expectedUrls = "wdsbedebox";
		await t.test(`#urls`, () => {
			assert.strictEqual(actualUrls, expectedUrls);
		});
	});
});
