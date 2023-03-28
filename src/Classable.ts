

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Classable {

	getType(): string
	;
	setType(type: string): void;

}
