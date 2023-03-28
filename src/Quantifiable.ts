import IUnit from "./IUnit.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Quantifiable {

	getQuantityUnit(): Promise<IUnit | undefined>
	;
	getQuantityValue(): number
	;
	setQuantityUnit(quantityUnit: IUnit): void;
	setQuantityValue(quantityValue: number): void;

}
