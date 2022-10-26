import ICustomerCategory from "./ICustomerCategory.js";
import ICatalogItem from "./ICatalogItem.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Marketable {
    getOfferedItem(): (ICatalogItem & Semanticable) | undefined;
    getCustomerCategory(): (ICustomerCategory & Semanticable);
}
//# sourceMappingURL=Marketable.d.ts.map