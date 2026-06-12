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
const THEORETICAL_STOCK_SEM_TYPE = "dfc-b:TheoreticalStock";
export default class TheoreticalStock extends SemanticObject {
    constructor(parameters) {
        const type = THEORETICAL_STOCK_SEM_TYPE;
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
        if (parameters.localizedProduct) {
            this.setLocalizedProduct(parameters.localizedProduct);
        }
        if (parameters.quantity) {
            this.setQuantity(parameters.quantity);
        }
        if (parameters.physicalPlace) {
            this.setPhysicalPlace(parameters.physicalPlace);
        }
        if (parameters.availabilityDate) {
            this.setAvailabilityDate(parameters.availabilityDate);
        }
    }
    getQuantity() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
    setQuantity(quantity) {
        this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
    }
    getPhysicalPlace(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:localizedBy");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    getAvailabilityDate() {
        return this.getSemanticProperty("dfc-b:availabilityDate");
    }
    getLocalizedProduct(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:constitutes");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setAvailabilityDate(availabilityDate) {
        this.setSemanticPropertyLiteral("dfc-b:availabilityDate", availabilityDate);
    }
    setLocalizedProduct(localizedProduct) {
        this.setSemanticPropertyReference("dfc-b:constitutes", localizedProduct);
        this.connector.store(localizedProduct);
    }
    setPhysicalPlace(physicalPlace) {
        this.setSemanticPropertyReference("dfc-b:localizedBy", physicalPlace);
        this.connector.store(physicalPlace);
    }
}
//# sourceMappingURL=TheoreticalStock.js.map