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
		
		
		const ivdqjusqoo = new SaleSession({ connector, semanticId: 'http://base.com/kadfygpvrb' });
		const tyilijvswm = new Person({ connector, semanticId: 'http://base.com/gdauwkmrli' });
		const rdykaupcpj = [new OrderLine({ connector, semanticId: 'http://base.com/bbbharmkgs' })];
		const qsoeluoare = new Person({ connector, semanticId: 'http://base.com/xwcoamkzkq' });
		const wxonyjdwxb = new SKOSConcept({ connector, semanticId: 'http://base.com/wndonrxvfv' });
		const fmuccmnzjx = new SKOSConcept({ connector, semanticId: 'http://base.com/jrlnfsifba' });
		const ydhmiutpgb = new SKOSConcept({ connector, semanticId: 'http://base.com/auzfmepzsz' });
		const obj = new Order({
			connector,
			semanticId: "http://example.org/obj",
			number: "xkfotwbznl",
			date: "yhxfkvyocn",
			saleSession: ivdqjusqoo,
			client: tyilijvswm,
			lines: rdykaupcpj,
			soldBy: qsoeluoare,
			fulfilmentStatus: wxonyjdwxb,
			orderStatus: fmuccmnzjx,
			paymentStatus: ydhmiutpgb
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualNumber = obj.getNumber();
		const expectedNumber = "xkfotwbznl";
		await t.test(`#number`, () => {
			assert.strictEqual(actualNumber, expectedNumber);
		});

		const actualDate = obj.getDate();
		const expectedDate = "yhxfkvyocn";
		await t.test(`#date`, () => {
			assert.strictEqual(actualDate, expectedDate);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = ivdqjusqoo;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualClient = await obj.getClient();
		const expectedClient = tyilijvswm;
		await t.test(`#client`, () => {
			assertSemanticEqual(actualClient, expectedClient);
		});

		const actualLines = await obj.getLines();
		const expectedLines = rdykaupcpj;
		await actualLines.forEach((actual, i) => {
			t.test(`#lines[${i}]`, () => {
				assert.strictEqual(actual, expectedLines[i]);
			});
		});

		const actualSoldBy = await obj.getSoldBy();
		const expectedSoldBy = qsoeluoare;
		await t.test(`#soldBy`, () => {
			assertSemanticEqual(actualSoldBy, expectedSoldBy);
		});

		const actualFulfilmentStatus = await obj.getFulfilmentStatus();
		const expectedFulfilmentStatus = wxonyjdwxb;
		await t.test(`#fulfilmentStatus`, () => {
			assertSemanticEqual(actualFulfilmentStatus, expectedFulfilmentStatus);
		});

		const actualOrderStatus = await obj.getOrderStatus();
		const expectedOrderStatus = fmuccmnzjx;
		await t.test(`#orderStatus`, () => {
			assertSemanticEqual(actualOrderStatus, expectedOrderStatus);
		});

		const actualPaymentStatus = await obj.getPaymentStatus();
		const expectedPaymentStatus = ydhmiutpgb;
		await t.test(`#paymentStatus`, () => {
			assertSemanticEqual(actualPaymentStatus, expectedPaymentStatus);
		});
	});
});
