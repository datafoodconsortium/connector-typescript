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
const VARIANT_CHARACTERISTIC_SEM_TYPE = "dfc-b:VariantCaracteristic";
export default class VariantCharacteristic extends SemanticObject {
    constructor(parameters) {
        const type = VARIANT_CHARACTERISTIC_SEM_TYPE;
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
        if (parameters.date) {
            this.setDate(parameters.date);
        }
        if (parameters.productOption) {
            this.setProductOption(parameters.productOption);
        }
        if (parameters.productOptionValue) {
            this.setProductOptionValue(parameters.productOptionValue);
        }
    }
    getProductOption(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasProductOption");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    setDate(date) {
        this.setSemanticPropertyLiteral("dfc-b:date", date);
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setProductOptionValue(productOptionValue) {
        this.setSemanticPropertyReference("dfc-b:hasProductOptionValue", productOptionValue);
        this.connector.store(productOptionValue);
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getDate() {
        return this.getSemanticProperty("dfc-b:date");
    }
    getProductOptionValue(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasProductOptionValue");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setProductOption(productOption) {
        this.setSemanticPropertyReference("dfc-b:hasProductOption", productOption);
        this.connector.store(productOption);
    }
}
//# sourceMappingURL=VariantCharacteristic.js.map