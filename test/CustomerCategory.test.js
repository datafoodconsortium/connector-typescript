import CustomerCategory from '../lib/CustomerCategory.js';

const connector = global.connector;
const expected = ``;

test('serialize basic customer category', async () => {
    const customerCategory = new CustomerCategory;
    customerCategory.setSemanticId("customerCategory1");
    customerCategory.setDescription("description");

    const serialized = await connector.export(customerCategory);
    expect(serialized).toStrictEqual(expected);
});