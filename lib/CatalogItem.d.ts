import IDefinedProduct from "./IDefinedProduct.js";
import IOffer from "./IOffer.js";
import ICatalogItem from "./ICatalogItem.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
export default class CatalogItem extends SemanticObject implements ICatalogItem {
    private product;
    private sku;
    private stockLimitation;
    private offers;
    constructor(product: (IDefinedProduct & Semanticable));
    getSku(): string;
    getStockLimitation(): number;
    addOffer(offer: (IOffer & Semanticable)): void;
    getOfferedProduct(): (IDefinedProduct & Semanticable);
    getOfferers(): IterableIterator<(IOffer & Semanticable)>;
}
//# sourceMappingURL=CatalogItem.d.ts.map