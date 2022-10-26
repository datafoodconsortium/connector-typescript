import Identifiable from "./Identifiable.js";
import Localizable from "./Localizable.js";
import Contactable from "./Contactable.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
export default abstract class Agent extends SemanticObject implements Identifiable {
    private contacts;
    private localizations;
    constructor();
    getLocalizations(): IterableIterator<(Localizable & Semanticable)>;
    getContacts(): IterableIterator<(Contactable & Semanticable)>;
    removeContact(contact: (Contactable & Semanticable)): void;
    removeLocalization(localization: (Localizable & Semanticable)): void;
    addLocalization(localization: (Localizable & Semanticable)): void;
    addContact(contact: (Contactable & Semanticable)): void;
}
//# sourceMappingURL=Agent.d.ts.map