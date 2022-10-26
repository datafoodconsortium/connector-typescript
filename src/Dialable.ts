

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Dialable {

	getNumber(): number;
	getCountryCode(): number;
	setNumber(number: number): void;
	setCountryCode(countryCode: number): void;

}
