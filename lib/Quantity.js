var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SemanticObjectAnonymous } from "@virtual-assembly/semantizer";
const QUANTITY_SEM_TYPE = "dfc-b:Quantity";
export default class Quantity extends SemanticObjectAnonymous {
    constructor(parameters) {
        const type = parameters.semanticType ? parameters.semanticType : QUANTITY_SEM_TYPE;
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
        if (parameters.unit) {
            this.setQuantityUnit(parameters.unit);
        }
        if (parameters.value || parameters.value === 0) {
            this.setQuantityValue(parameters.value);
        }
    }
    getQuantityValue() {
        return Number(this.getSemanticProperty("dfc-b:value"));
    }
    setQuantityUnit(quantityUnit) {
        this.setSemanticPropertyReference("dfc-b:hasUnit", quantityUnit);
        this.connector.store(quantityUnit);
    }
    getQuantityUnit(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasUnit");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setQuantityValue(quantityValue) {
        this.setSemanticPropertyLiteral("dfc-b:value", quantityValue);
    }
}
//# sourceMappingURL=Quantity.js.map