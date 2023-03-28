import SuppliedProduct from "./SuppliedProduct.js"
import ICatalogItem from "./ICatalogItem.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Supplier {

	getSuppliedProducts(): Promise<Array<(SuppliedProduct & Semanticable)>>
	;
	getCatalogItems(): Promise<Array<(ICatalogItem & Semanticable)>>
	;
	addSupplyProduct(suppliedProduct: (SuppliedProduct & Semanticable)): void;
	addCatalogItem(catalogItem: (ICatalogItem & Semanticable)): void;

}
