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
const PHYSICAL_PRODUCT_SEM_TYPE = "dfc-b:PhysicalProduct";
export default class PhysicalProduct extends SemanticObject {
    constructor(parameters) {
        const type = PHYSICAL_PRODUCT_SEM_TYPE;
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
        if (parameters.quantity) {
            this.setQuantity(parameters.quantity);
        }
        if (parameters.images) {
            parameters.images.forEach(e => this.addImage(e));
        }
        if (parameters.localizedProducts) {
            parameters.localizedProducts.forEach(e => this.addLocalizedProduct(e));
        }
        if (parameters.productBatches) {
            parameters.productBatches.forEach(e => this.addProductBatch(e));
        }
        if (parameters.realStocks) {
            parameters.realStocks.forEach(e => this.addRealStock(e));
        }
        if (parameters.realizedConsumptionFlows) {
            parameters.realizedConsumptionFlows.forEach(e => this.addRealizedConsumptionFlow(e));
        }
        if (parameters.realizedProductionFlows) {
            parameters.realizedProductionFlows.forEach(e => this.addRealizedProductionFlow(e));
        }
    }
    getRealizedProductionFlows(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:producedBy");
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
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    removeRealStock(realStock) {
        throw new Error("Not yet implemented.");
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    removeLocalizedProduct(localizedProduct) {
        throw new Error("Not yet implemented.");
    }
    setRealizedProductionFlows(realizedProductionFlows) {
        this.getSemanticPropertyAll("dfc-b:producedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        realizedProductionFlows.forEach((physicalProduct) => {
            this.addSemanticPropertyReference("dfc-b:producedBy", physicalProduct, true);
            this.connector.store(physicalProduct);
        });
    }
    addProductBatch(productBatch) {
        if (productBatch.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:tracedBy", productBatch);
        }
        else {
            this.connector.store(productBatch);
            this.addSemanticPropertyReference("dfc-b:tracedBy", productBatch);
        }
    }
    removeRealizedProductionFlow(realizedProductionFlow) {
        throw new Error("Not yet implemented.");
    }
    setLocalizedProducts(localizedProducts) {
        this.getSemanticPropertyAll("dfc-b:represents").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        localizedProducts.forEach((physicalProduct) => {
            this.addSemanticPropertyReference("dfc-b:represents", physicalProduct, true);
            this.connector.store(physicalProduct);
        });
    }
    removeProductBatch(productBatch) {
        throw new Error("Not yet implemented.");
    }
    getRealizedConsumptionFlows(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:consumedBy");
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
    setRealStocks(realStock) {
        this.getSemanticPropertyAll("dfc-b:constituedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        realStock.forEach((physicalProduct) => {
            this.addSemanticPropertyReference("dfc-b:constituedBy", physicalProduct, true);
            this.connector.store(physicalProduct);
        });
    }
    getRealStocks(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:constituedBy");
            try {
                for (var _d = true, properties_3 = __asyncValues(properties), properties_3_1; properties_3_1 = yield properties_3.next(), _a = properties_3_1.done, !_a;) {
                    _c = properties_3_1.value;
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
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = properties_3.return)) yield _b.call(properties_3);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return results;
        });
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    addLocalizedProduct(localizedProduct) {
        if (localizedProduct.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:represents", localizedProduct);
        }
        else {
            this.connector.store(localizedProduct);
            this.addSemanticPropertyReference("dfc-b:represents", localizedProduct);
        }
    }
    addImage(image) {
        this.addSemanticPropertyLiteral("dfc-b:image", image);
    }
    removeRealizedConsumptionFlow(realizedConsumptionFlow) {
        throw new Error("Not yet implemented.");
    }
    addRealizedConsumptionFlow(realizedConsumptionFlow) {
        if (realizedConsumptionFlow.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:consumedBy", realizedConsumptionFlow);
        }
        else {
            this.connector.store(realizedConsumptionFlow);
            this.addSemanticPropertyReference("dfc-b:consumedBy", realizedConsumptionFlow);
        }
    }
    addRealStock(realStock) {
        if (realStock.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:constituedBy", realStock);
        }
        else {
            this.connector.store(realStock);
            this.addSemanticPropertyReference("dfc-b:constituedBy", realStock);
        }
    }
    setRealizedConsumptionFlows(realizedConsumptionFlows) {
        this.getSemanticPropertyAll("dfc-b:consumedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        realizedConsumptionFlows.forEach((physicalProduct) => {
            this.addSemanticPropertyReference("dfc-b:consumedBy", physicalProduct, true);
            this.connector.store(physicalProduct);
        });
    }
    getQuantity() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
    removeImage(image) {
        throw new Error("Not yet implemented.");
    }
    getProductBatches(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:tracedBy");
            try {
                for (var _d = true, properties_4 = __asyncValues(properties), properties_4_1; properties_4_1 = yield properties_4.next(), _a = properties_4_1.done, !_a;) {
                    _c = properties_4_1.value;
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
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = properties_4.return)) yield _b.call(properties_4);
                }
                finally { if (e_4) throw e_4.error; }
            }
            return results;
        });
    }
    setQuantity(quantity) {
        this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
    }
    getLocalizedProducts(options) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:represents");
            try {
                for (var _d = true, properties_5 = __asyncValues(properties), properties_5_1; properties_5_1 = yield properties_5.next(), _a = properties_5_1.done, !_a;) {
                    _c = properties_5_1.value;
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
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = properties_5.return)) yield _b.call(properties_5);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return results;
        });
    }
    addRealizedProductionFlow(realizedProductionFlow) {
        if (realizedProductionFlow.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:producedBy", realizedProductionFlow);
        }
        else {
            this.connector.store(realizedProductionFlow);
            this.addSemanticPropertyReference("dfc-b:producedBy", realizedProductionFlow);
        }
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getImages() {
        return this.getSemanticPropertyAll("dfc-b:image");
    }
    setProductBatches(productBatches) {
        this.getSemanticPropertyAll("dfc-b:tracedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        productBatches.forEach((physicalProduct) => {
            this.addSemanticPropertyReference("dfc-b:tracedBy", physicalProduct, true);
            this.connector.store(physicalProduct);
        });
    }
    setImages(image) {
        this.setSemanticPropertyLiteralAll("dfc-b:image", image);
    }
}
//# sourceMappingURL=PhysicalProduct.js.map