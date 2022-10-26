import ICatalogItem from "./ICatalogItem.js";
import SuppliedProduct from "./SuppliedProduct.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Supplier {
    getSuppliedProducts(): IterableIterator<(SuppliedProduct & Semanticable)>;
    getCatalogItems(): IterableIterator<(ICatalogItem & Semanticable)>;
    addSupplyProduct(suppliedProduct: (SuppliedProduct & Semanticable)): void;
    addCatalogItem(catalogItem: (ICatalogItem & Semanticable)): void;
}
//# sourceMappingURL=Supplier.d.ts.map