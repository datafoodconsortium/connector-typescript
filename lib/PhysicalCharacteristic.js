import Characteristic from "./Characteristic.js";
export default class PhysicalCharacteristic extends Characteristic {
    constructor(quantityUnit, quantityValue, physicalDimension) {
        super(quantityUnit, quantityValue);
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#PhysicalCharacteristic");
        this.physicalDimension = physicalDimension;
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPhysicalDimension", () => this.getQuantityDimension());
    }
    getQuantityDimension() {
        return this.physicalDimension;
    }
    setQuantityDimension(quantityDimension) {
        this.physicalDimension = quantityDimension;
    }
}
//# sourceMappingURL=PhysicalCharacteristic.js.map