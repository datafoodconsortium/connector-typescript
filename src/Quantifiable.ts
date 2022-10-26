

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Quantifiable {

	getQuantityUnit(): string;
	getQuantityValue(): number;
	setQuantityUnit(quantityUnit: string): void;
	setQuantityValue(quantityValue: number): void;

}
