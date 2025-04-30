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
		
		
		const pbxxoyumbz = new SaleSession({ connector, semanticId: 'http://base.com/bjjfhyjhil' });
		const ufombqnrli = new Person({ connector, semanticId: 'http://base.com/tbcyfnsndh' });
		const zzzhmwygkj = [new OrderLine({ connector, semanticId: 'http://base.com/sitzjurkgi' })];
		const jvfjpgwkvd = new Person({ connector, semanticId: 'http://base.com/hxmuzqteni' });
		const jwobuqfeiw = new SKOSConcept({ connector, semanticId: 'http://base.com/xbxwyprfzv' });
		const rqxwrohcdq = new SKOSConcept({ connector, semanticId: 'http://base.com/plyopmeooh' });
		const whjcqjpzge = new SKOSConcept({ connector, semanticId: 'http://base.com/fbpqvagpsr' });
		const obj = new Order({
			connector,
			semanticId: "http://example.org/obj",
			number: "pcnajvsfos",
			date: "uplkbyzxps",
			saleSession: pbxxoyumbz,
			client: ufombqnrli,
			lines: zzzhmwygkj,
			soldBy: jvfjpgwkvd,
			fulfilmentStatus: jwobuqfeiw,
			orderStatus: rqxwrohcdq,
			paymentStatus: whjcqjpzge
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualNumber = obj.getNumber();
		const expectedNumber = "pcnajvsfos";
		await t.test(`#number`, () => {
			assert.strictEqual(actualNumber, expectedNumber);
		});

		const actualDate = obj.getDate();
		const expectedDate = "uplkbyzxps";
		await t.test(`#date`, () => {
			assert.strictEqual(actualDate, expectedDate);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = pbxxoyumbz;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualClient = await obj.getClient();
		const expectedClient = ufombqnrli;
		await t.test(`#client`, () => {
			assertSemanticEqual(actualClient, expectedClient);
		});

		const actualLines = await obj.getLines();
		const expectedLines = zzzhmwygkj;
		await actualLines.forEach((actual, i) => {
			t.test(`#lines[${i}]`, () => {
				assert.strictEqual(actual, expectedLines[i]);
			});
		});

		const actualSoldBy = await obj.getSoldBy();
		const expectedSoldBy = jvfjpgwkvd;
		await t.test(`#soldBy`, () => {
			assertSemanticEqual(actualSoldBy, expectedSoldBy);
		});

		const actualFulfilmentStatus = await obj.getFulfilmentStatus();
		const expectedFulfilmentStatus = jwobuqfeiw;
		await t.test(`#fulfilmentStatus`, () => {
			assertSemanticEqual(actualFulfilmentStatus, expectedFulfilmentStatus);
		});

		const actualOrderStatus = await obj.getOrderStatus();
		const expectedOrderStatus = rqxwrohcdq;
		await t.test(`#orderStatus`, () => {
			assertSemanticEqual(actualOrderStatus, expectedOrderStatus);
		});

		const actualPaymentStatus = await obj.getPaymentStatus();
		const expectedPaymentStatus = whjcqjpzge;
		await t.test(`#paymentStatus`, () => {
			assertSemanticEqual(actualPaymentStatus, expectedPaymentStatus);
		});
	});
});
