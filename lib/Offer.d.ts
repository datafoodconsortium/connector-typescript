import IOffer from "./IOffer.js";
import ICustomerCategory from "./ICustomerCategory.js";
import ICatalogItem from "./ICatalogItem.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
export default class Offer extends SemanticObject implements IOffer {
    private price;
    private stockLimitation;
    private offeredItem;
    private offeredTo;
    constructor(offeredItem: (ICatalogItem & Semanticable), offeredTo: (ICustomerCategory & Semanticable));
    getStockLimitation(): number;
    getPrice(): number;
    getOfferedItem(): (ICatalogItem & Semanticable) | undefined;
    getCustomerCategory(): (ICustomerCategory & Semanticable);
}
//# sourceMappingURL=Offer.d.ts.map