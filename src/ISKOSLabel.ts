

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface ISKOSLabel extends Semanticable{

	getLanguage(): string
	;
	getValue(): string
	;

}
