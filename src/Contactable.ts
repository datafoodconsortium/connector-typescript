import Dialable from "./Dialable.js"
import Emailable from "./Emailable.js"
import Localizable from "./Localizable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Contactable {

	getContactName(): string;
	getPostalAddresses(): IterableIterator<(Localizable & Semanticable)>;
	getPhoneNumbers(): IterableIterator<(Dialable & Semanticable)>;
	getEmailAddresses(): IterableIterator<(Emailable & Semanticable)>;
	addPostalAddress(postalAddress: (Localizable & Semanticable)): void;
	addPhoneNumber(phoneNumber: (Dialable & Semanticable)): void;
	addEmailAddress(emailAddress: (Emailable & Semanticable)): void;
	removePostalAddress(postalAddress: (Localizable & Semanticable)): void;
	removePhoneNumber(phoneNumber: (Dialable & Semanticable)): void;
	removeEmailAddress(emailAddress: (Emailable & Semanticable)): void;
	setContactName(contactName: string): void;

}
