

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Personable {

	getFirstName(): string
	;
	getLastName(): string
	;
	setFirstName(firstName: string): void;
	setLastName(lastName: string): void;

}
