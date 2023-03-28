import ICatalogItem from "./ICatalogItem.js"
import ISuppliedProduct from "./ISuppliedProduct.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface ProductSupplier {

	getSuppliedProducts(): Promise<Array<ISuppliedProduct>>
	;
	supplyProduct(suppliedProduct: ISuppliedProduct): void;
	unsupplyProduct(suppliedProduct: ISuppliedProduct): void;

}
