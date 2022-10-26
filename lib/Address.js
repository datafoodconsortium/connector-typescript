import { SemanticObject } from "@virtual-assembly/semantizer";
export default class Address extends SemanticObject {
    constructor(street, postalCode, city, country) {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Address");
        this.street = street;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasStreet", () => this.getStreet());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPostalCode", () => this.getPostalCode());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCity", () => this.getCity());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCountry", () => this.getCountry());
    }
    setStreet(street) {
        this.street = street;
    }
    getPostalCode() {
        return this.postalCode;
    }
    setCountry(country) {
        this.country = country;
    }
    getCountry() {
        return this.country;
    }
    setPostalCode(postalCode) {
        this.postalCode = postalCode;
    }
    setCity(city) {
        this.city = city;
    }
    getCity() {
        return this.city;
    }
    getStreet() {
        return this.street;
    }
}
//# sourceMappingURL=Address.js.map