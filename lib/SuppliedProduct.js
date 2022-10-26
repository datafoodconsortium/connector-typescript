import DefinedProduct from "./DefinedProduct.js";
export default class SuppliedProduct extends DefinedProduct {
    constructor(name, description) {
        super(name, description);
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#SuppliedProduct");
    }
}
//# sourceMappingURL=SuppliedProduct.js.map