var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Characteristic from "./Characteristic.js";
const NUTRIENT_CHARACTERISTIC_SEM_TYPE = "dfc-b:NutrientCharacteristic";
export default class NutrientCharacteristic extends Characteristic {
    constructor(parameters) {
        const type = parameters.semanticType ? parameters.semanticType : NUTRIENT_CHARACTERISTIC_SEM_TYPE;
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
                unit: parameters.unit,
                value: parameters.value
            });
        }
        if (parameters.nutrientDimension) {
            this.setQuantityDimension(parameters.nutrientDimension);
        }
    }
    getQuantityDimension(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasNutrientDimension");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setQuantityDimension(quantityDimension) {
        this.setSemanticPropertyReference("dfc-b:hasNutrientDimension", quantityDimension);
        this.connector.store(quantityDimension);
    }
}
//# sourceMappingURL=NutrientCharacteristic.js.map