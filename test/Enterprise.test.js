import Enterprise from '../lib/Enterprise.js';
import Address from '../lib/Address.js';
import CustomerCategory from '../lib/CustomerCategory.js';
import SuppliedProduct from '../lib/SuppliedProduct.js';
import CatalogItem from '../lib/CatalogItem.js';

const connector = global.connector;
const expected = `{"@context":{"dfc-b":"http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#"},"@id":"enterprise1","@type":"dfc-b:Enterprise","dfc-b:VATnumber":"vatNumber","dfc-b:defines":"customerCategory1","dfc-b:hasAddress":"address/address1","dfc-b:manages":"catalogItem1","dfc-b:supplies":"suppliedProduct1"}`;

test('serialize basic enterprise', async () => {
    const address = new Address;
    address.setSemanticId("address/address1");
    address.setCountry("France");

    const customerCategory = new CustomerCategory;
    customerCategory.setSemanticId("customerCategory1");

    const suppliedProduct = new SuppliedProduct;
    suppliedProduct.setSemanticId("suppliedProduct1");

    const catalogItem = new CatalogItem;
    catalogItem.setSemanticId("catalogItem1");

    const enterprise = new Enterprise;
    enterprise.setSemanticId("enterprise1");
    enterprise.addLocalization(address);
    enterprise.setVatNumber("vatNumber");
    enterprise.addCustomerCategory(customerCategory);
    enterprise.addSupplyProduct(suppliedProduct);
    enterprise.addCatalogItem(catalogItem);

    const serialized = await connector.export(enterprise);
    expect(serialized).toStrictEqual(expected);
});