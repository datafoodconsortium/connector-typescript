import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import SKOSConcept from "../../lib/SKOSConcept.js"
import Order from "../../lib/Order.js"
import SaleSession from "../../lib/SaleSession.js"
import Person from "../../lib/Person.js"
import PaymentMethod from "../../lib/PaymentMethod.js"
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
		
		
		const jajfgcegnf = new SaleSession({ connector, semanticId: 'http://base.com/fgcqncihcl' });
		const nznrtyefge = new Person({ connector, semanticId: 'http://base.com/vgpelrhpvu' });
		const kjkopqzatp = [new OrderLine({ connector, semanticId: 'http://base.com/xigiqfvkch' })];
		const bnkxtveqgg = new Person({ connector, semanticId: 'http://base.com/ysycnvpzxb' });
		const niwmqyifsm = new SKOSConcept({ connector, semanticId: 'http://base.com/dmpbrqjgis' });
		const jopeqaidzi = new SKOSConcept({ connector, semanticId: 'http://base.com/ppndpopgbj' });
		const yjcaqnkgvl = new SKOSConcept({ connector, semanticId: 'http://base.com/luufxxpggz' });
		const teoatngtri = new PaymentMethod({ connector, semanticId: 'http://base.com/qapahyubse' });
		const obj = new Order({
			connector,
			semanticId: "http://example.org/obj",
			number: "ygiepgrods",
			date: "wqlkpbalei",
			saleSession: jajfgcegnf,
			client: nznrtyefge,
			lines: kjkopqzatp,
			soldBy: bnkxtveqgg,
			fulfilmentStatus: niwmqyifsm,
			orderStatus: jopeqaidzi,
			paymentStatus: yjcaqnkgvl,
			paymentMethod: teoatngtri
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualNumber = obj.getNumber();
		const expectedNumber = "ygiepgrods";
		await t.test(`#number`, () => {
			assert.strictEqual(actualNumber, expectedNumber);
		});

		const actualDate = obj.getDate();
		const expectedDate = "wqlkpbalei";
		await t.test(`#date`, () => {
			assert.strictEqual(actualDate, expectedDate);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = jajfgcegnf;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualClient = await obj.getClient();
		const expectedClient = nznrtyefge;
		await t.test(`#client`, () => {
			assertSemanticEqual(actualClient, expectedClient);
		});

		const actualLines = await obj.getLines();
		const expectedLines = kjkopqzatp;
		await actualLines.forEach((actual, i) => {
			t.test(`#lines[${i}]`, () => {
				assert.strictEqual(actual, expectedLines[i]);
			});
		});

		const actualSoldBy = await obj.getSoldBy();
		const expectedSoldBy = bnkxtveqgg;
		await t.test(`#soldBy`, () => {
			assertSemanticEqual(actualSoldBy, expectedSoldBy);
		});

		const actualFulfilmentStatus = await obj.getFulfilmentStatus();
		const expectedFulfilmentStatus = niwmqyifsm;
		await t.test(`#fulfilmentStatus`, () => {
			assertSemanticEqual(actualFulfilmentStatus, expectedFulfilmentStatus);
		});

		const actualOrderStatus = await obj.getOrderStatus();
		const expectedOrderStatus = jopeqaidzi;
		await t.test(`#orderStatus`, () => {
			assertSemanticEqual(actualOrderStatus, expectedOrderStatus);
		});

		const actualPaymentStatus = await obj.getPaymentStatus();
		const expectedPaymentStatus = yjcaqnkgvl;
		await t.test(`#paymentStatus`, () => {
			assertSemanticEqual(actualPaymentStatus, expectedPaymentStatus);
		});

		const actualPaymentMethod = await obj.getPaymentMethod();
		const expectedPaymentMethod = teoatngtri;
		await t.test(`#paymentMethod`, () => {
			assertSemanticEqual(actualPaymentMethod, expectedPaymentMethod);
		});
	});
});
