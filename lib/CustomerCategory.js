import { SemanticObject } from "@virtual-assembly/semantizer";
export default class CustomerCategory extends SemanticObject {
    constructor(name, description) {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#CustomerCategory");
        this.name = name;
        this.description = description;
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#name", () => this.getName());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#description", () => this.getDescription());
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
//# sourceMappingURL=CustomerCategory.js.map