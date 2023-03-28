import ICatalogItem from "./ICatalogItem.js"
import IEnterprise from "./IEnterprise.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Browsable {

	getMaintainers(): Promise<Array<IEnterprise>>
	;
	getItems(): Promise<Array<ICatalogItem>>
	;
	removeItem(item: ICatalogItem): void;
	addItem(item: ICatalogItem): void;
	addMaintainer(maintainer: IEnterprise): void;

}
