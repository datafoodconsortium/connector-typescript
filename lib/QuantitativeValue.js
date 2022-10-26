import { SemanticObject } from "@virtual-assembly/semantizer";
export default class QuantitativeValue extends SemanticObject {
    constructor(quantityUnit, quantityValue) {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#QuantitativeValue");
        this.quantityUnit = quantityUnit;
        this.quantityValue = quantityValue;
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasUnit", () => this.getQuantityUnit());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#value", () => this.getQuantityValue());
    }
    getQuantityUnit() {
        return this.quantityUnit;
    }
    setQuantityValue(quantityValue) {
        this.quantityValue = quantityValue;
    }
    getQuantityValue() {
        return this.quantityValue;
    }
    setQuantityUnit(quantityUnit) {
        this.quantityUnit = quantityUnit;
    }
}
//# sourceMappingURL=QuantitativeValue.js.map