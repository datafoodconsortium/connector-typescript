

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Stockable {

	getStockLimitation(): number
	;
	setStockLimitation(stockLimitation: number): void;

}
