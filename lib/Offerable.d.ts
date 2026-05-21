import IOffer from "./IOffer.js";
import IDefinedProduct from "./IDefinedProduct.js";
export default interface Offerable {
    getOfferers(): Promise<IOffer[]>;
    getOfferedProduct(): Promise<IDefinedProduct | undefined>;
    addOffer(offer: IOffer): void;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    removeOffer(offer: IOffer): void;
    setOffers(offers: IOffer[]): void;
}
//# sourceMappingURL=Offerable.d.ts.map