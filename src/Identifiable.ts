import Contactable from "./Contactable.js"
import Localizable from "./Localizable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Identifiable {

	getContacts(): IterableIterator<(Contactable & Semanticable)>;
	getLocalizations(): IterableIterator<(Localizable & Semanticable)>;
	addContact(contact: (Contactable & Semanticable)): void;
	addLocalization(localization: (Localizable & Semanticable)): void;
	removeContact(contact: (Contactable & Semanticable)): void;
	removeLocalization(localization: (Localizable & Semanticable)): void;

}
