import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Catalog from "../../lib/Catalog.js"
import Person from "../../lib/Person.js"
import Enterprise from "../../lib/Enterprise.js"
import Address from "../../lib/Address.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import Agent from "../../lib/Agent.js"
import TechnicalProduct from "../../lib/TechnicalProduct.js"
import CatalogItem from "../../lib/CatalogItem.js"
import Enterprise from "../../lib/Enterprise.js"
import Enterprise from "../../lib/Enterprise.js"
import Enterprise from "../../lib/Enterprise.js"
import CustomerCategory from "../../lib/CustomerCategory.js"
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

test('Enterprise', async (t) => {
	await t.test('#constructor', async (t) => {
		const connector = new Connector();
		
		const dovpenakmi = [new Address({ connector, semanticId: 'http://base.com/smunowxmao' })];
		
		
		const wgqwxgutoz = [new CustomerCategory({ connector, semanticId: 'http://base.com/xuzvokfjpn' })];
		const krwdiuswln = [new Catalog({ connector, semanticId: 'http://base.com/qzgybhgcwe' })];
		const ghozbmjimo = [new CatalogItem({ connector, semanticId: 'http://base.com/vdgzjfqaez' })];
		const khhtabqdnh = [new SuppliedProduct({ connector, semanticId: 'http://base.com/snwkfnamle' })];
		const aukjthcjfx = [new TechnicalProduct({ connector, semanticId: 'http://base.com/iothzcvynh' })];
		const kecxyudcux = new Person({ connector, semanticId: 'http://base.com/ciuvpiyhcy' });
		
		const obj = new Enterprise({
			connector,
			semanticId: "http://example.org/obj",
			name: "jinpqijtys",
			localizations: dovpenakmi,
			description: "ckkwtzihbo",
			vatNumber: "lgxuhuiisl",
			customerCategories: wgqwxgutoz,
			catalogs: krwdiuswln,
			catalogItems: ghozbmjimo,
			suppliedProducts: khhtabqdnh,
			technicalProducts: aukjthcjfx,
			mainContact: kecxyudcux,
			logo: "qjxrjenjsv"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "jinpqijtys";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = dovpenakmi;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "ckkwtzihbo";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualVatNumber = obj.getVatNumber();
		const expectedVatNumber = "lgxuhuiisl";
		await t.test(`#vatNumber`, () => {
			assert.strictEqual(actualVatNumber, expectedVatNumber);
		});

		const actualCustomerCategories = await obj.getCustomerCategories();
		const expectedCustomerCategories = wgqwxgutoz;
		await actualCustomerCategories.forEach((actual, i) => {
			t.test(`#customerCategories[${i}]`, () => {
				assert.strictEqual(actual, expectedCustomerCategories[i]);
			});
		});

		const actualCatalogs = await obj.getMaintainedCatalogs();
		const expectedCatalogs = krwdiuswln;
		await actualCatalogs.forEach((actual, i) => {
			t.test(`#catalogs[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogs[i]);
			});
		});

		const actualCatalogItems = await obj.getManagedCatalogItems();
		const expectedCatalogItems = ghozbmjimo;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualSuppliedProducts = await obj.getSuppliedProducts();
		const expectedSuppliedProducts = khhtabqdnh;
		await actualSuppliedProducts.forEach((actual, i) => {
			t.test(`#suppliedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedSuppliedProducts[i]);
			});
		});

		const actualTechnicalProducts = await obj.getProposedTechnicalProducts();
		const expectedTechnicalProducts = aukjthcjfx;
		await actualTechnicalProducts.forEach((actual, i) => {
			t.test(`#technicalProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedTechnicalProducts[i]);
			});
		});

		const actualMainContact = await obj.getMainContact();
		const expectedMainContact = kecxyudcux;
		await t.test(`#mainContact`, () => {
			assertSemanticEqual(actualMainContact, expectedMainContact);
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "qjxrjenjsv";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
