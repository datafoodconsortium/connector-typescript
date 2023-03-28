

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Geolocalizable {

	getLatitude(): number
	;
	getLongitude(): number
	;
	setLatitude(latitude: number): void;
	setLongitude(longitude: number): void;

}
