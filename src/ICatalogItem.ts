import Catalogable from "./Catalogable.js"
import Offerable from "./Offerable.js"
import Stockable from "./Stockable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface ICatalogItem extends Semanticable, Catalogable, Stockable, Offerable{

	getSku(): string
	;
	setSku(sku: string): void;

}
