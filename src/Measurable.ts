import ICharacteristicDimension from "./ICharacteristicDimension.js"
import Quantifiable from "./Quantifiable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Measurable {

	getQuantityDimension(): Promise<ICharacteristicDimension | undefined>
	;
	setQuantityDimension(quantityDimension: ICharacteristicDimension): void;

}
