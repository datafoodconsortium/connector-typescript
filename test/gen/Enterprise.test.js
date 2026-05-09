import assert from 'node:assert';
import { test } from 'node:test';
import Connector from '../../lib/Connector.js';
import Enterprise from "../../lib/Enterprise.js"
import CustomerCategory from "../../lib/CustomerCategory.js"
import Enterprise from "../../lib/Enterprise.js"
import Person from "../../lib/Person.js"
import Address from "../../lib/Address.js"
import Enterprise from "../../lib/Enterprise.js"
import Agent from "../../lib/Agent.js"
import SuppliedProduct from "../../lib/SuppliedProduct.js"
import CatalogItem from "../../lib/CatalogItem.js"
import Catalog from "../../lib/Catalog.js"
import TechnicalProduct from "../../lib/TechnicalProduct.js"
import Enterprise from "../../lib/Enterprise.js"
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
		
		const mworlctltj = [new Address({ connector, semanticId: 'http://base.com/qlzocskwgc' })];
		
		
		const kmexnirugu = [new CustomerCategory({ connector, semanticId: 'http://base.com/owibbidzbh' })];
		const rzmvkkntag = [new Catalog({ connector, semanticId: 'http://base.com/xjaptlwcoa' })];
		const jswyoeuwcb = [new CatalogItem({ connector, semanticId: 'http://base.com/cypqjjxffm' })];
		const smbzqmpunn = [new SuppliedProduct({ connector, semanticId: 'http://base.com/fekeucliss' })];
		const dufcjtsood = [new TechnicalProduct({ connector, semanticId: 'http://base.com/wfcvaqgpey' })];
		const zlhabzgavc = new Person({ connector, semanticId: 'http://base.com/qbhiikuunf' });
		
		const obj = new Enterprise({
			connector,
			semanticId: "http://example.org/obj",
			name: "ibwfqbofkt",
			localizations: mworlctltj,
			description: "ogzhxydajr",
			vatNumber: "umnblggzud",
			customerCategories: kmexnirugu,
			catalogs: rzmvkkntag,
			catalogItems: jswyoeuwcb,
			suppliedProducts: smbzqmpunn,
			technicalProducts: dufcjtsood,
			mainContact: zlhabzgavc,
			logo: "ckuxsvcnqs"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "ibwfqbofkt";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = mworlctltj;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "ogzhxydajr";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualVatNumber = obj.getVatNumber();
		const expectedVatNumber = "umnblggzud";
		await t.test(`#vatNumber`, () => {
			assert.strictEqual(actualVatNumber, expectedVatNumber);
		});

		const actualCustomerCategories = await obj.getCustomerCategories();
		const expectedCustomerCategories = kmexnirugu;
		await actualCustomerCategories.forEach((actual, i) => {
			t.test(`#customerCategories[${i}]`, () => {
				assert.strictEqual(actual, expectedCustomerCategories[i]);
			});
		});

		const actualCatalogs = await obj.getMaintainedCatalogs();
		const expectedCatalogs = rzmvkkntag;
		await actualCatalogs.forEach((actual, i) => {
			t.test(`#catalogs[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogs[i]);
			});
		});

		const actualCatalogItems = await obj.getManagedCatalogItems();
		const expectedCatalogItems = jswyoeuwcb;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualSuppliedProducts = await obj.getSuppliedProducts();
		const expectedSuppliedProducts = smbzqmpunn;
		await actualSuppliedProducts.forEach((actual, i) => {
			t.test(`#suppliedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedSuppliedProducts[i]);
			});
		});

		const actualTechnicalProducts = await obj.getProposedTechnicalProducts();
		const expectedTechnicalProducts = dufcjtsood;
		await actualTechnicalProducts.forEach((actual, i) => {
			t.test(`#technicalProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedTechnicalProducts[i]);
			});
		});

		const actualMainContact = await obj.getMainContact();
		const expectedMainContact = zlhabzgavc;
		await t.test(`#mainContact`, () => {
			assertSemanticEqual(actualMainContact, expectedMainContact);
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "ckuxsvcnqs";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
