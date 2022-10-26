import Agent from "./Agent.js";
export default class Person extends Agent {
    constructor(firstName, lastName) {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Person");
        this.firstName = firstName;
        this.lastName = lastName;
        this.affiliatedOrganizations = [];
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#firstName", () => this.getFirstName());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#familyName", () => this.getLastName());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#affiliates", () => this.getAffiliatedOrganizations());
    }
    affiliateTo(organization) {
        this.affiliatedOrganizations.push(organization);
    }
    leaveAffiliatedOrganization(organization) {
    }
    getAffiliatedOrganizations() {
        return this.affiliatedOrganizations.values();
    }
    setFirstName(firstName) {
        this.firstName = firstName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
}
//# sourceMappingURL=Person.js.map