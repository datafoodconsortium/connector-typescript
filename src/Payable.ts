import IPrice from "./IPrice.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Payable {

	getPrice(): Promise<IPrice | undefined>
	;
	setPrice(price: IPrice): void;

}
