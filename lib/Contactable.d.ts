import Emailable from "./Emailable.js";
import Localizable from "./Localizable.js";
import Dialable from "./Dialable.js";
export default interface Contactable {
    getContactName(): string;
    getPostalAddresses(): Promise<Array<Localizable>>;
    getPhoneNumbers(): Promise<Array<Dialable>>;
    getEmailAddresses(): Promise<Array<Emailable>>;
    addPostalAddress(postalAddress: Localizable): void;
    addPhoneNumber(phoneNumber: Dialable): void;
    addEmailAddress(emailAddress: Emailable): void;
    removePostalAddress(postalAddress: Localizable): void;
    removePhoneNumber(phoneNumber: Dialable): void;
    removeEmailAddress(emailAddress: Emailable): void;
    setContactName(contactName: string): void;
}
//# sourceMappingURL=Contactable.d.ts.map