import Quantifiable from "./Quantifiable.js"
import ICharacteristicDimension from "./ICharacteristicDimension.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Measurable {

	getQuantityDimension(): (ICharacteristicDimension & Semanticable);
	setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void;

}
