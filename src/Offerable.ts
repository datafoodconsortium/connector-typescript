import IOffer from "./IOffer.js"
import IDefinedProduct from "./IDefinedProduct.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Offerable {

	getOfferers(): Promise<Array<IOffer>>
	;
	getOfferedProduct(): Promise<IDefinedProduct | undefined>
	;
	addOffer(offer: IOffer): void;
	setOfferedProduct(offeredProduct: IDefinedProduct): void;

}
