

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Ellapsable {

	getBeginDate(): string
	;
	getEndDate(): string
	;
	setBeginDate(beginDate: string): void;
	setEndDate(endDate: string): void;

}
