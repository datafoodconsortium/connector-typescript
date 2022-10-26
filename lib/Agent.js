import { SemanticObject } from "@virtual-assembly/semantizer";
export default class Agent extends SemanticObject {
    constructor() {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Agent");
        this.contacts = [];
        this.localizations = [];
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasAddress", () => this.getLocalizations());
    }
    getLocalizations() {
        return this.localizations.values();
    }
    getContacts() {
        return this.contacts.values();
    }
    removeContact(contact) {
    }
    removeLocalization(localization) {
    }
    addLocalization(localization) {
        this.localizations.push(localization);
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
}
//# sourceMappingURL=Agent.js.map