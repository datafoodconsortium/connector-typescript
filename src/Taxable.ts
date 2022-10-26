

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Taxable {

	getVatNumber(): string;
	setVatNumber(vatNumber: string): void;

}
