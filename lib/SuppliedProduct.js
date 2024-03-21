import DefinedProduct from "./DefinedProduct.js";
const SUPPLIED_PRODUCT_SEM_TYPE = "dfc-b:SuppliedProduct";
export default class SuppliedProduct extends DefinedProduct {
    getTotalTheoreticalStock() {
        return Number(this.getSemanticProperty("dfc-b:totalTheoreticalStock"));
    }
    setTotalTheoreticalStock(totalTheoreticalStock) {
        this.setSemanticPropertyLiteral("dfc-b:totalTheoreticalStock", totalTheoreticalStock);
    }
    constructor(parameters) {
        const type = SUPPLIED_PRODUCT_SEM_TYPE;
        if (parameters.other) {
            super({
                connector: parameters.connector,
                semanticId: parameters.semanticId,
                other: parameters.other,
            });
            if (!parameters.other.isSemanticTypeOf(type))
                throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
        }
        else {
            super({
                connector: parameters.connector,
                semanticId: parameters.semanticId,
                semanticType: type,
                name: parameters.name,
                description: parameters.description,
                productType: parameters.productType,
                quantity: parameters.quantity,
                alcoholPercentage: parameters.alcoholPercentage,
                lifetime: parameters.lifetime,
                claims: parameters.claims,
                usageOrStorageConditions: parameters.usageOrStorageConditions,
                allergenCharacteristics: parameters.allergenCharacteristics,
                nutrientCharacteristics: parameters.nutrientCharacteristics,
                physicalCharacteristics: parameters.physicalCharacteristics,
                geographicalOrigin: parameters.geographicalOrigin,
                catalogItems: parameters.catalogItems,
                certifications: parameters.certifications,
                natureOrigin: parameters.natureOrigin,
                partOrigin: parameters.partOrigin,
                images: parameters.images
            });
        }
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
        if (parameters.totalTheoreticalStock || parameters.totalTheoreticalStock === 0) {
            this.setTotalTheoreticalStock(parameters.totalTheoreticalStock);
        }
    }
}
//# sourceMappingURL=SuppliedProduct.js.map