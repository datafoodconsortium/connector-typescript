import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SocialMedia from "../../lib/SocialMedia.js"
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

test('SocialMedia', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const obj = new SocialMedia({
			connector,
			semanticId: "http://example.org/obj",
			name: "jauebqhdjx",
			url: "ouroybkdvk"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "jauebqhdjx";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualUrl = obj.getUrl();
		const expectedUrl = "ouroybkdvk";
		await t.test(`#url`, () => {
			assert.strictEqual(actualUrl, expectedUrl);
		});
	});
});
