import ICatalogItem from "./ICatalogItem.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Proposable {

	getCatalogItems(): IterableIterator<(ICatalogItem & Semanticable)>;
	addCatalogItem(catalogItem: (ICatalogItem & Semanticable)): void;

}
