import { SemanticObject } from "@virtual-assembly/semantizer";
export default class SKOSConcept extends SemanticObject {
    constructor() {
        super();
        this.setSemanticType("http://www.w3.org/2004/02/skos/core#Concept");
        this.broaders = [];
        this.schemes = [];
        this.narrowers = [];
        this.prefLabels = [];
        this.registerSemanticProperty("http://www.w3.org/2004/02/skos/core#broader", () => this.getBroader());
        this.registerSemanticProperty("http://www.w3.org/2004/02/skos/core#inScheme", () => this.getScheme());
        this.registerSemanticProperty("http://www.w3.org/2004/02/skos/core#narrower", () => this.getNarrower());
        this.registerSemanticProperty("http://www.w3.org/2004/02/skos/core#prefLabel", () => this.getPrefLabel());
    }
    getNarrower() {
        return this.narrowers.values();
    }
    getBroader() {
        return this.broaders.values();
    }
    removeScheme(scheme) {
    }
    removeNarrower(narrower) {
    }
    getPrefLabel() {
        return this.prefLabels.values();
    }
    addBroader(broader) {
        this.broaders.push(broader);
    }
    addPrefLabel(prefLabel) {
        this.prefLabels.push(prefLabel);
    }
    getScheme() {
        return this.schemes.values();
    }
    removePrefLabel(prefLabel) {
    }
    removeBroader(broader) {
    }
    addScheme(scheme) {
        this.schemes.push(scheme);
    }
    addNarrower(narrower) {
        this.narrowers.push(narrower);
    }
}
//# sourceMappingURL=SKOSConcept.js.map