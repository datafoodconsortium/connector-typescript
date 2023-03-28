

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Nameable {

	getName(): string
	;
	setName(name: string): void;

}
