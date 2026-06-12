var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
import DefinedProduct from "./DefinedProduct.js";
const VARIANT_SEM_TYPE = "dfc-b:Variant";
export default class Variant extends DefinedProduct {
    constructor(parameters) {
        const type = VARIANT_SEM_TYPE;
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
                images: parameters.images,
                variants: parameters.variants,
                referenceProductOptions: parameters.referenceProductOptions
            });
        }
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
        if (parameters.isVariantOf) {
            parameters.isVariantOf.forEach(e => this.addIsVariantOf(e));
        }
        if (parameters.variantCharacteristics) {
            parameters.variantCharacteristics.forEach(e => this.addVariantCharacteristic(e));
        }
    }
    removeIsVariantOf(product) {
        throw new Error("Not yet implemented.");
    }
    setVariantCharacteristics(variantCharacteristics) {
        this.getSemanticPropertyAll("dfc-b:hasVariantCaracteristic").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        variantCharacteristics.forEach((variant) => {
            this.addSemanticPropertyReference("dfc-b:hasVariantCaracteristic", variant, true);
            this.connector.store(variant);
        });
    }
    removeVariantCharacteristic(variantCharacteristic) {
        throw new Error("Not yet implemented.");
    }
    getVariantCharacteristics(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasVariantCaracteristic");
            try {
                for (var _d = true, properties_1 = __asyncValues(properties), properties_1_1; properties_1_1 = yield properties_1.next(), _a = properties_1_1.done, !_a;) {
                    _c = properties_1_1.value;
                    _d = false;
                    try {
                        const semanticId = _c;
                        const semanticObject = yield this.connector.fetch(semanticId, options);
                        if (semanticObject)
                            results.push(semanticObject);
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = properties_1.return)) yield _b.call(properties_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return results;
        });
    }
    setIsVariantOf(products) {
        this.getSemanticPropertyAll("dfc-b:isVariantOf").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        products.forEach((variant) => {
            this.addSemanticPropertyReference("dfc-b:isVariantOf", variant, true);
            this.connector.store(variant);
        });
    }
    isVariantOf(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:isVariantOf");
            try {
                for (var _d = true, properties_2 = __asyncValues(properties), properties_2_1; properties_2_1 = yield properties_2.next(), _a = properties_2_1.done, !_a;) {
                    _c = properties_2_1.value;
                    _d = false;
                    try {
                        const semanticId = _c;
                        const semanticObject = yield this.connector.fetch(semanticId, options);
                        if (semanticObject)
                            results.push(semanticObject);
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = properties_2.return)) yield _b.call(properties_2);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return results;
        });
    }
    addIsVariantOf(product) {
        if (product.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:isVariantOf", product);
        }
        else {
            this.connector.store(product);
            this.addSemanticPropertyReference("dfc-b:isVariantOf", product);
        }
    }
    addVariantCharacteristic(variantCharacteristic) {
        if (variantCharacteristic.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasVariantCaracteristic", variantCharacteristic);
        }
        else {
            this.connector.store(variantCharacteristic);
            this.addSemanticPropertyReference("dfc-b:hasVariantCaracteristic", variantCharacteristic);
        }
    }
}
//# sourceMappingURL=Variant.js.map