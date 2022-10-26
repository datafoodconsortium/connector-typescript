

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Describable {

	getDescription(): string;
	setDescription(description: string): void;

}
