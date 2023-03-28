

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Localizable {

	getStreet(): string
	;
	getPostalCode(): string
	;
	getCity(): string
	;
	getCountry(): string
	;
	setStreet(street: string): void;
	setPostalCode(postalCode: string): void;
	setCity(city: string): void;
	setCountry(country: string): void;

}
