import Characteristic from "./Characteristic.js";
export default class AllergenCharacteristic extends Characteristic {
    constructor(quantityUnit, quantityValue, allergenDimension) {
        super(quantityUnit, quantityValue);
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#AllergenCharacteristic");
        this.allergenDimension = allergenDimension;
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasAllergenDimension", () => this.getQuantityDimension());
    }
    getQuantityDimension() {
        return this.allergenDimension;
    }
    setQuantityDimension(quantityDimension) {
        this.allergenDimension = quantityDimension;
    }
}
//# sourceMappingURL=AllergenCharacteristic.js.map