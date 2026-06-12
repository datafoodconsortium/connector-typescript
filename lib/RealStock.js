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
import { SemanticObject } from "@virtual-assembly/semantizer";
const REAL_STOCK_SEM_TYPE = "dfc-b:RealStock";
export default class RealStock extends SemanticObject {
    constructor(parameters) {
        const type = REAL_STOCK_SEM_TYPE;
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
        if (parameters.physicalProduct) {
            this.setPhysicalProduct(parameters.physicalProduct);
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
        if (parameters.productBatches) {
            parameters.productBatches.forEach(e => this.addProductBatch(e));
        }
    }
    setPhysicalProduct(physicalProduct) {
        this.setSemanticPropertyReference("dfc-b:constitutes", physicalProduct);
        this.connector.store(physicalProduct);
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
            const semanticId = this.getSemanticProperty("dfc-b:isStoredIn");
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
    getPhysicalProduct(options) {
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
    addProductBatch(productBatch) {
        if (productBatch.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:identifies", productBatch);
        }
        else {
            this.connector.store(productBatch);
            this.addSemanticPropertyReference("dfc-b:identifies", productBatch);
        }
    }
    removeProductBatch(ProductBatch) {
        throw new Error("Not yet implemented.");
    }
    setPhysicalPlace(physicalPlace) {
        this.setSemanticPropertyReference("dfc-b:isStoredIn", physicalPlace);
        this.connector.store(physicalPlace);
    }
    setProductBatches(ProductBatches) {
        this.getSemanticPropertyAll("dfc-b:identifies").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        ProductBatches.forEach((realStock) => {
            this.addSemanticPropertyReference("dfc-b:identifies", realStock, true);
            this.connector.store(realStock);
        });
    }
    getProductBatches(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:identifies");
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
}
//# sourceMappingURL=RealStock.js.map