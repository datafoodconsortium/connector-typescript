import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import DeliveryOption from "../../lib/DeliveryOption.js"
import PhysicalPlace from "../../lib/PhysicalPlace.js"
import SaleSession from "../../lib/SaleSession.js"
import Order from "../../lib/Order.js"
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

test('DeliveryOption', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		
		
		const kexepipoco = new Quantity({ connector });
		const esukzehxkm = new Order({ connector, semanticId: 'http://base.com/lhqwnuzrhy' });
		const nlzocxjmbi = new SaleSession({ connector, semanticId: 'http://base.com/hcubybigvl' });
		const ucnairlqbg = new PhysicalPlace({ connector, semanticId: 'http://base.com/rgzatbvjjk' });
		
		
		
		
		const obj = new DeliveryOption({
			connector,
			semanticId: "http://example.org/obj",
			name: "qijahwoazv",
			description: "ufnszqwuyz",
			fee: 0.7812335,
			quantity: kexepipoco,
			order: esukzehxkm,
			saleSession: nlzocxjmbi,
			deliveredPlace: ucnairlqbg,
			deliveryConstraint: "csavbwlxke",
			accessibilityInformation: "bxjzpwymst",
			beginDate: kzfsbopdzv,
			endDate: tbhhuvgqiy
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "qijahwoazv";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "ufnszqwuyz";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualFee = obj.getFee();
		const expectedFee = 0.7812335;
		await t.test(`#fee`, () => {
			assert.strictEqual(actualFee, expectedFee);
		});

		const expectedQuantity = kexepipoco;
		const actualQuantity = obj.getQuantity();
		await t.test(`#quantity`, () => {
			assertSemanticEqual(actualQuantity, expectedQuantity);
		});

		const actualOrder = await obj.getOrder();
		const expectedOrder = esukzehxkm;
		await t.test(`#order`, () => {
			assertSemanticEqual(actualOrder, expectedOrder);
		});

		const actualSaleSession = await obj.getSaleSession();
		const expectedSaleSession = nlzocxjmbi;
		await t.test(`#saleSession`, () => {
			assertSemanticEqual(actualSaleSession, expectedSaleSession);
		});

		const actualDeliveredPlace = await obj.getDeliveredPlace();
		const expectedDeliveredPlace = ucnairlqbg;
		await t.test(`#deliveredPlace`, () => {
			assertSemanticEqual(actualDeliveredPlace, expectedDeliveredPlace);
		});

		const actualDeliveryConstraint = obj.getDeliveryConstraint();
		const expectedDeliveryConstraint = "csavbwlxke";
		await t.test(`#deliveryConstraint`, () => {
			assert.strictEqual(actualDeliveryConstraint, expectedDeliveryConstraint);
		});

		const actualAccessibilityInformation = obj.getAccessibilityInformation();
		const expectedAccessibilityInformation = "bxjzpwymst";
		await t.test(`#accessibilityInformation`, () => {
			assert.strictEqual(actualAccessibilityInformation, expectedAccessibilityInformation);
		});

		const actualBeginDate = obj.getBeginDate();
		const expectedBeginDate = kzfsbopdzv;
		await t.test(`#beginDate`, () => {
			assert.strictEqual(actualBeginDate, expectedBeginDate);
		});

		const actualEndDate = obj.getEndDate();
		const expectedEndDate = tbhhuvgqiy;
		await t.test(`#endDate`, () => {
			assert.strictEqual(actualEndDate, expectedEndDate);
		});
	});
});
