import ICatalog from "./ICatalog.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface CatalogMaintainer {

	getMaintainedCatalogs(): Promise<Array<ICatalog>>
	;
	maintainCatalog(catalog: ICatalog): void;
	unmaintainCatalog(catalog: ICatalog): void;

}
