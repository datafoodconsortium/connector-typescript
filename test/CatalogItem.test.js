import CatalogItem from '../lib/CatalogItem.js';
import SuppliedProduct from '../lib/SuppliedProduct.js';
import Offer from '../lib/Offer.js';

const connector = global.connector;
const expected = ``;

test('serialize basic catalog item', async () => {
    const suppliedProduct = new SuppliedProduct;
    suppliedProduct.setSemanticId("suppliedProduct1");

    const offer1 = new Offer;
    offer1.setSemanticId("offer1");

    const catalogItem = new CatalogItem(suppliedProduct);
    catalogItem.setSemanticId("catalogItem1");
    customerCategory.addOffer(offer1);

    const serialized = await connector.export(catalogItem);
    expect(serialized).toStrictEqual(expected);
});