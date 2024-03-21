import IDefinedProduct from "./IDefinedProduct.js";
import IOffer from "./IOffer.js";
export default interface Offerable {
    getOfferers(): Promise<IOffer[]>;
    getOfferedProduct(): Promise<IDefinedProduct | undefined>;
    addOffer(offer: IOffer): void;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
}
//# sourceMappingURL=Offerable.d.ts.map