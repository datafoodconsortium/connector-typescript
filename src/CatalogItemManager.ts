import ICatalogItem from "./ICatalogItem.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface CatalogItemManager {

	getManagedCatalogItems(): Promise<Array<ICatalogItem>>
	;
	manageCatalogItem(catalogItem: ICatalogItem): void;
	unmanageCatalogItem(catalogItem: ICatalogItem): void;

}
