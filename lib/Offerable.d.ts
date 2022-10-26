import IDefinedProduct from "./IDefinedProduct.js";
import IOffer from "./IOffer.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Offerable {
    getOfferers(): IterableIterator<(IOffer & Semanticable)>;
    getOfferedProduct(): (IDefinedProduct & Semanticable);
    addOffer(offer: (IOffer & Semanticable)): void;
}
//# sourceMappingURL=Offerable.d.ts.map