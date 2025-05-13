import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import Person from "../../lib/Person.js"
import SaleSession from "../../lib/SaleSession.js"
import Order from "../../lib/Order.js"
import OrderLine from "../../lib/OrderLine.js"
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

test('Order', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		const dkfczfqngf = new SaleSession({ connector, semanticId: 'http://base.com/ljpqknxssn' });
		const rdfjdlhmro = new Person({ connector, semanticId: 'http://base.com/gjavimjvld' });
		const vvvuiughzm = [new OrderLine({ connector, semanticId: 'http://base.com/doycfikfki' })];
		const bihcnbmsii = new Person({ connector, semanticId: 'http://base.com/dorropiurw' });
		const rosmxowlsj = new SKOSConcept({ connector, semanticId: 'http://base.com/qsjefbyrxu' });
		const kapolhhgsq = new SKOSConcept({ connector, semanticId: 'http://base.com/pycmksnxlw' });
		const iuwrtnfdnl = new SKOSConcept({ connector, semanticId: 'http://base.com/vaixepbrxu' });
		const obj = new Order({
			connector,
			semanticId: "http://example.org/obj",
			number: "wkumzbiuxl",
			date: "lzcmbhkowi",
			saleSession: dkfczfqngf,
			client: rdfjdlhmro,
			lines: vvvuiughzm,
			soldBy: bihcnbmsii,
			fulfilmentStatus: rosmxowlsj,
			orderStatus: kapolhhgsq,
			paymentStatus: iuwrtnfdnl
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualNumber = obj.getNumber();
		const expectedNumber = "wkumzbiuxl";
		await t.test(`#number`, () => {
			assert.strictEqual(actualNumber, expectedNumber);
		});

		const actualDate = obj.getDate();
		const expectedDate = "lzcmbhkowi";
		await t.test(`#date`, () => {
			assert.strictEqual(actualDate, expectedDate);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = dkfczfqngf;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualClient = await obj.getClient();
		const expectedClient = rdfjdlhmro;
		await t.test(`#client`, () => {
			assertSemanticEqual(actualClient, expectedClient);
		});

		const actualLines = await obj.getLines();
		const expectedLines = vvvuiughzm;
		await actualLines.forEach((actual, i) => {
			t.test(`#lines[${i}]`, () => {
				assert.strictEqual(actual, expectedLines[i]);
			});
		});

		const actualSoldBy = await obj.getSoldBy();
		const expectedSoldBy = bihcnbmsii;
		await t.test(`#soldBy`, () => {
			assertSemanticEqual(actualSoldBy, expectedSoldBy);
		});

		const actualFulfilmentStatus = await obj.getFulfilmentStatus();
		const expectedFulfilmentStatus = rosmxowlsj;
		await t.test(`#fulfilmentStatus`, () => {
			assertSemanticEqual(actualFulfilmentStatus, expectedFulfilmentStatus);
		});

		const actualOrderStatus = await obj.getOrderStatus();
		const expectedOrderStatus = kapolhhgsq;
		await t.test(`#orderStatus`, () => {
			assertSemanticEqual(actualOrderStatus, expectedOrderStatus);
		});

		const actualPaymentStatus = await obj.getPaymentStatus();
		const expectedPaymentStatus = iuwrtnfdnl;
		await t.test(`#paymentStatus`, () => {
			assertSemanticEqual(actualPaymentStatus, expectedPaymentStatus);
		});
	});
});
