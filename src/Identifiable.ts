import IAddress from "./IAddress.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Identifiable {

	/* Returns the different localizations of the subject. */
	getLocalizations(): Promise<Array<IAddress>>
	;
	addLocalization(localization: IAddress): void;
	removeLocalization(localization: IAddress): void;

}
