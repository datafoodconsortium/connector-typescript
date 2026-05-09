import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import PickupOption from "../../lib/PickupOption.js"
import PhysicalPlace from "../../lib/PhysicalPlace.js"
import Order from "../../lib/Order.js"
import SaleSession from "../../lib/SaleSession.js"
import ShippingOption from "../../lib/ShippingOption.js"
import Quantity from "../../lib/Quantity.js"
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

test('PickupOption', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		
		const wwtcfyyjgh = new Quantity({ connector });
		const wiynfdnbew = new Order({ connector, semanticId: 'http://base.com/tmugiwzaxd' });
		const xftmjtleiy = new SaleSession({ connector, semanticId: 'http://base.com/qgapyrhmrt' });
		const msnafylcax = new PhysicalPlace({ connector, semanticId: 'http://base.com/zltqogdqja' });
		
		
		const obj = new PickupOption({
			connector,
			semanticId: "http://example.org/obj",
			name: "bmrdxiwsqr",
			description: "fhliwsvope",
			fee: 0.84937924,
			quantity: wwtcfyyjgh,
			order: wiynfdnbew,
			saleSession: xftmjtleiy,
			pickupPlace: msnafylcax,
			beginDate: gwrhofwcez,
			endDate: edtthuqwzp
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "bmrdxiwsqr";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "fhliwsvope";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualFee = obj.getFee();
		const expectedFee = 0.84937924;
		await t.test(`#fee`, () => {
			assert.strictEqual(actualFee, expectedFee);
		});

		const expectedQuantity = wwtcfyyjgh;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualOrder = await obj.getOrder();
		const expectedOrder = wiynfdnbew;
		await t.test(`#order`, () => {
			assertSemanticEqual(actualOrder, expectedOrder);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = xftmjtleiy;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualPickupPlace = await obj.getPickedUpPlace();
		const expectedPickupPlace = msnafylcax;
		await t.test(`#pickupPlace`, () => {
			assertSemanticEqual(actualPickupPlace, expectedPickupPlace);
		});

		const actualBeginDate = obj.getBeginDate();
		const expectedBeginDate = gwrhofwcez;
		await t.test(`#beginDate`, () => {
			assert.strictEqual(actualBeginDate, expectedBeginDate);
		});

		const actualEndDate = obj.getEndDate();
		const expectedEndDate = edtthuqwzp;
		await t.test(`#endDate`, () => {
			assert.strictEqual(actualEndDate, expectedEndDate);
		});
	});
});
