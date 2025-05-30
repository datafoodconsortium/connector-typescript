var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Flow from "./Flow.js";
const PLANNED_PRODUCTION_FLOW_SEM_TYPE = "dfc-b:AsPlannedProductionFlow";
export default class PlannedProductionFlow extends Flow {
    constructor(parameters) {
        const type = PLANNED_PRODUCTION_FLOW_SEM_TYPE;
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
                quantity: parameters.quantity
            });
        }
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
        if (parameters.transformation) {
            this.setPlannedTransformation(parameters.transformation);
        }
        if (parameters.product) {
            this.setProducedProduct(parameters.product);
        }
    }
    getPlannedTransformation(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:outcomeOf");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setProducedProduct(producedProduct) {
        this.setSemanticPropertyReference("dfc-b:produces", producedProduct);
        this.connector.store(producedProduct);
    }
    getProducedProduct(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:produces");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setPlannedTransformation(plannedTransformation) {
        this.setSemanticPropertyReference("dfc-b:outcomeOf", plannedTransformation);
        this.connector.store(plannedTransformation);
    }
}
//# sourceMappingURL=PlannedProductionFlow.js.map