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
		
		const yfwvhrceha = [new Address({ connector, semanticId: 'http://base.com/phkaldoswb' })];
		
		
		const bcdkexfugi = [new CustomerCategory({ connector, semanticId: 'http://base.com/jpgsztgudc' })];
		const wunnrhszog = [new Catalog({ connector, semanticId: 'http://base.com/hihtamgfhk' })];
		const mnzqbrdmmm = [new CatalogItem({ connector, semanticId: 'http://base.com/adtpxhadbh' })];
		const jaqepjozgj = [new SuppliedProduct({ connector, semanticId: 'http://base.com/odacrarenl' })];
		const azwjspdjvo = [new TechnicalProduct({ connector, semanticId: 'http://base.com/nwpisbpjfl' })];
		const iwjlgoyusd = new Person({ connector, semanticId: 'http://base.com/pvkdsprrrq' });
		
		const obj = new Enterprise({
			connector,
			semanticId: "http://example.org/obj",
			name: "wudrtohxux",
			localizations: yfwvhrceha,
			description: "ujzumelkeg",
			vatNumber: "ngiohclurw",
			customerCategories: bcdkexfugi,
			catalogs: wunnrhszog,
			catalogItems: mnzqbrdmmm,
			suppliedProducts: jaqepjozgj,
			technicalProducts: azwjspdjvo,
			mainContact: iwjlgoyusd,
			logo: "aqsjjmurxt"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "wudrtohxux";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = yfwvhrceha;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "ujzumelkeg";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualVatNumber = obj.getVatNumber();
		const expectedVatNumber = "ngiohclurw";
		await t.test(`#vatNumber`, () => {
			assert.strictEqual(actualVatNumber, expectedVatNumber);
		});

		const actualCustomerCategories = await obj.getCustomerCategories();
		const expectedCustomerCategories = bcdkexfugi;
		await actualCustomerCategories.forEach((actual, i) => {
			t.test(`#customerCategories[${i}]`, () => {
				assert.strictEqual(actual, expectedCustomerCategories[i]);
			});
		});

		const actualCatalogs = await obj.getMaintainedCatalogs();
		const expectedCatalogs = wunnrhszog;
		await actualCatalogs.forEach((actual, i) => {
			t.test(`#catalogs[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogs[i]);
			});
		});

		const actualCatalogItems = await obj.getManagedCatalogItems();
		const expectedCatalogItems = mnzqbrdmmm;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualSuppliedProducts = await obj.getSuppliedProducts();
		const expectedSuppliedProducts = jaqepjozgj;
		await actualSuppliedProducts.forEach((actual, i) => {
			t.test(`#suppliedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedSuppliedProducts[i]);
			});
		});

		const actualTechnicalProducts = await obj.getProposedTechnicalProducts();
		const expectedTechnicalProducts = azwjspdjvo;
		await actualTechnicalProducts.forEach((actual, i) => {
			t.test(`#technicalProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedTechnicalProducts[i]);
			});
		});

		const actualMainContact = await obj.getMainContact();
		const expectedMainContact = iwjlgoyusd;
		await t.test(`#mainContact`, () => {
			assertSemanticEqual(actualMainContact, expectedMainContact);
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "aqsjjmurxt";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
