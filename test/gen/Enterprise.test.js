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
		
		const nabtugyfhl = [new Address({ connector, semanticId: 'http://base.com/rlujpaptfp' })];
		
		
		const mpvmwnbrik = [new CustomerCategory({ connector, semanticId: 'http://base.com/jbqsgamfxz' })];
		const xdqpundcdg = [new Catalog({ connector, semanticId: 'http://base.com/fztyfehygv' })];
		const moarwvkchc = [new CatalogItem({ connector, semanticId: 'http://base.com/jaqlbqpjlp' })];
		const gwlopfizoy = [new SuppliedProduct({ connector, semanticId: 'http://base.com/azvegxdezw' })];
		const boickjhdhm = [new TechnicalProduct({ connector, semanticId: 'http://base.com/sfyypdpqfq' })];
		const phmgmrriqy = new Person({ connector, semanticId: 'http://base.com/mvcdygvmxk' });
		
		const obj = new Enterprise({
			connector,
			semanticId: "http://example.org/obj",
			name: "gsqlpqapdf",
			localizations: nabtugyfhl,
			description: "xbqdfaxmoj",
			vatNumber: "cicnoxhzib",
			customerCategories: mpvmwnbrik,
			catalogs: xdqpundcdg,
			catalogItems: moarwvkchc,
			suppliedProducts: gwlopfizoy,
			technicalProducts: boickjhdhm,
			mainContact: phmgmrriqy,
			logo: "hxqlargvxt"
		});

		assert.strictEqual('http://example.org/obj', obj.getSemanticId());

		const actualName = obj.getName();
		const expectedName = "gsqlpqapdf";
		await t.test(`#name`, () => {
			assert.strictEqual(actualName, expectedName);
		});

		const actualLocalizations = await obj.getLocalizations();
		const expectedLocalizations = nabtugyfhl;
		await actualLocalizations.forEach((actual, i) => {
			t.test(`#localizations[${i}]`, () => {
				assert.strictEqual(actual, expectedLocalizations[i]);
			});
		});

		const actualDescription = obj.getDescription();
		const expectedDescription = "xbqdfaxmoj";
		await t.test(`#description`, () => {
			assert.strictEqual(actualDescription, expectedDescription);
		});

		const actualVatNumber = obj.getVatNumber();
		const expectedVatNumber = "cicnoxhzib";
		await t.test(`#vatNumber`, () => {
			assert.strictEqual(actualVatNumber, expectedVatNumber);
		});

		const actualCustomerCategories = await obj.getCustomerCategories();
		const expectedCustomerCategories = mpvmwnbrik;
		await actualCustomerCategories.forEach((actual, i) => {
			t.test(`#customerCategories[${i}]`, () => {
				assert.strictEqual(actual, expectedCustomerCategories[i]);
			});
		});

		const actualCatalogs = await obj.getMaintainedCatalogs();
		const expectedCatalogs = xdqpundcdg;
		await actualCatalogs.forEach((actual, i) => {
			t.test(`#catalogs[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogs[i]);
			});
		});

		const actualCatalogItems = await obj.getManagedCatalogItems();
		const expectedCatalogItems = moarwvkchc;
		await actualCatalogItems.forEach((actual, i) => {
			t.test(`#catalogItems[${i}]`, () => {
				assert.strictEqual(actual, expectedCatalogItems[i]);
			});
		});

		const actualSuppliedProducts = await obj.getSuppliedProducts();
		const expectedSuppliedProducts = gwlopfizoy;
		await actualSuppliedProducts.forEach((actual, i) => {
			t.test(`#suppliedProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedSuppliedProducts[i]);
			});
		});

		const actualTechnicalProducts = await obj.getProposedTechnicalProducts();
		const expectedTechnicalProducts = boickjhdhm;
		await actualTechnicalProducts.forEach((actual, i) => {
			t.test(`#technicalProducts[${i}]`, () => {
				assert.strictEqual(actual, expectedTechnicalProducts[i]);
			});
		});

		const actualMainContact = await obj.getMainContact();
		const expectedMainContact = phmgmrriqy;
		await t.test(`#mainContact`, () => {
			assertSemanticEqual(actualMainContact, expectedMainContact);
		});

		const actualLogo = obj.getLogo();
		const expectedLogo = "hxqlargvxt";
		await t.test(`#logo`, () => {
			assert.strictEqual(actualLogo, expectedLogo);
		});
	});
});
