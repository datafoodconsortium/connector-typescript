var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SemanticObject } from "@virtual-assembly/semantizer";
const PRODUCT_BATCH_SEM_TYPE = "dfc-b:ProductBatch";
export default class ProductBatch extends SemanticObject {
    constructor(parameters) {
        const type = PRODUCT_BATCH_SEM_TYPE;
        if (parameters.other) {
            super({
                semantizer: parameters.connector.getSemantizer(),
                semanticId: parameters.semanticId,
                other: parameters.other,
            });
            if (!parameters.other.isSemanticTypeOf(type))
                throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
        }
        else {
            super({
                semantizer: parameters.connector.getSemantizer(),
                semanticId: parameters.semanticId,
                semanticType: type,
            });
        }
        this.connector = parameters.connector;
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
        if (parameters.name) {
            this.setName(parameters.name);
        }
        if (parameters.description) {
            this.setDescription(parameters.description);
        }
        if (parameters.batchNumber) {
            this.setBatchNumber(parameters.batchNumber);
        }
        if (parameters.realStock) {
            this.setRealStock(parameters.realStock);
        }
        if (parameters.physicalProduct) {
            this.setPhysicalProduct(parameters.physicalProduct);
        }
        if (parameters.bestBeforeDate) {
            this.setBestBeforeDate(parameters.bestBeforeDate);
        }
        if (parameters.expirationDate) {
            this.setExpirationDate(parameters.expirationDate);
        }
        if (parameters.productionDate) {
            this.setProductionDate(parameters.productionDate);
        }
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    setPhysicalProduct(physicalProduct) {
        this.setSemanticPropertyReference("dfc-b:contains", physicalProduct);
        this.connector.store(physicalProduct);
    }
    getProductionDate() {
        return this.getSemanticProperty("dfc-b:productionDate");
    }
    getBestBeforeDate() {
        return this.getSemanticProperty("dfc-b:bestBeforeDate");
    }
    getBatchNumber() {
        return this.getSemanticProperty("dfc-b:batchNumber");
    }
    setBestBeforeDate(bestBeforeDate) {
        this.setSemanticPropertyLiteral("dfc-b:bestBeforeDate", bestBeforeDate);
    }
    setBatchNumber(batchNumber) {
        this.setSemanticPropertyLiteral("dfc-b:batchNumber", batchNumber);
    }
    getExpirationDate() {
        return this.getSemanticProperty("dfc-b:expirationDate");
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    setRealStock(realStock) {
        this.setSemanticPropertyReference("dfc-b:identifiedBy", realStock);
        this.connector.store(realStock);
    }
    setExpirationDate(expirationDate) {
        this.setSemanticPropertyLiteral("dfc-b:expirationDate", expirationDate);
    }
    getPhysicalProduct(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:contains");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    getRealStock(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:identifiedBy");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setProductionDate(productionDate) {
        this.setSemanticPropertyLiteral("dfc-b:productionDate", productionDate);
    }
}
//# sourceMappingURL=ProductBatch.js.map