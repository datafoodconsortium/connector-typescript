import Characteristic from "./Characteristic.js";
export default class NutrientCharacteristic extends Characteristic {
    constructor(quantityUnit, quantityValue, nutrientDimension) {
        super(quantityUnit, quantityValue);
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#NutrientCharacteristic");
        this.nutrientDimension = nutrientDimension;
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasNutrientDimension", () => this.getQuantityDimension());
    }
    getQuantityDimension() {
        return this.nutrientDimension;
    }
    setQuantityDimension(quantityDimension) {
        this.nutrientDimension = quantityDimension;
    }
}
//# sourceMappingURL=NutrientCharacteristic.js.map