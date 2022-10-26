import Offer from '../lib/Offer.js';

const connector = global.connector;
const expected = ``;

test('serialize basic offer', async () => {
    const offer = new Offer;
    offer.setSemanticId("offer1");

    const serialized = await connector.export(offer);
    expect(serialized).toStrictEqual(expected);
});