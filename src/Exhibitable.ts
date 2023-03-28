

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Exhibitable {

	getImage(): string
	;
	setImage(image: string): void;

}
