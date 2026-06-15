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
const LOCALIZED_PRODUCT_SEM_TYPE = "dfc-b:LocalizedProduct";
export default class LocalizedProduct extends SemanticObject {
    constructor(parameters) {
        const type = LOCALIZED_PRODUCT_SEM_TYPE;
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
        if (parameters.cost || parameters.cost === 0) {
            this.setCost(parameters.cost);
        }
        if (parameters.suppliedProducts) {
            parameters.suppliedProducts.forEach(e => this.addSuppliedProduct(e));
        }
        if (parameters.physicalProducts) {
            parameters.physicalProducts.forEach(e => this.addPhysicalProduct(e));
        }
        if (parameters.theoreticalStocks) {
            parameters.theoreticalStocks.forEach(e => this.addTheoreticalStock(e));
        }
        if (parameters.plannedLocalConsumptionFlows) {
            parameters.plannedLocalConsumptionFlows.forEach(e => this.addPlannedLocalConsumptionFlow(e));
        }
        if (parameters.plannedLocalProductionFlows) {
            parameters.plannedLocalProductionFlows.forEach(e => this.addPlannedLocalProductionFlow(e));
        }
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    addPlannedLocalConsumptionFlow(consumptionFlow) {
        if (consumptionFlow.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:consumedBy", consumptionFlow);
        }
        else {
            this.connector.store(consumptionFlow);
            this.addSemanticPropertyReference("dfc-b:consumedBy", consumptionFlow);
        }
    }
    removeTheoreticalStock(theoreticalStock) {
        throw new Error("Not yet implemented.");
    }
    getCost() {
        return Number(this.getSemanticProperty("dfc-b:cost"));
    }
    getQuantity() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
    removePlannedLocalProductionFlow(productionFlow) {
        throw new Error("Not yet implemented.");
    }
    getPhysicalProducts(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:representedBy");
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
    removePlannedLocalConsumptionFlow(consumptionFlow) {
        throw new Error("Not yet implemented.");
    }
    setImages(image) {
        this.setSemanticPropertyLiteralAll("dfc-b:image", image);
    }
    setSuppliedProducts(suppliedProducts) {
        this.getSemanticPropertyAll("dfc-b:hasReference").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        suppliedProducts.forEach((localizedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasReference", localizedProduct, true);
            this.connector.store(localizedProduct);
        });
    }
    addTheoreticalStock(theoreticalStock) {
        if (theoreticalStock.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:constituedBy", theoreticalStock);
        }
        else {
            this.connector.store(theoreticalStock);
            this.addSemanticPropertyReference("dfc-b:constituedBy", theoreticalStock);
        }
    }
    setPlannedLocalConsumptionFlows(consumptionFlows) {
        this.getSemanticPropertyAll("dfc-b:consumedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        consumptionFlows.forEach((localizedProduct) => {
            this.addSemanticPropertyReference("dfc-b:consumedBy", localizedProduct, true);
            this.connector.store(localizedProduct);
        });
    }
    addPlannedLocalProductionFlow(productionFlow) {
        if (productionFlow.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:producedBy", productionFlow);
        }
        else {
            this.connector.store(productionFlow);
            this.addSemanticPropertyReference("dfc-b:producedBy", productionFlow);
        }
    }
    setPlannedLocalProductionFlows(productionFlows) {
        this.getSemanticPropertyAll("dfc-b:producedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        productionFlows.forEach((localizedProduct) => {
            this.addSemanticPropertyReference("dfc-b:producedBy", localizedProduct, true);
            this.connector.store(localizedProduct);
        });
    }
    removePhysicalProduct(physicalProduct) {
        throw new Error("Not yet implemented.");
    }
    removeImage(image) {
        throw new Error("Not yet implemented.");
    }
    addSuppliedProduct(suppliedProduct) {
        if (suppliedProduct.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasReference", suppliedProduct);
        }
        else {
            this.connector.store(suppliedProduct);
            this.addSemanticPropertyReference("dfc-b:hasReference", suppliedProduct);
        }
    }
    removeSuppliedProduct(suppliedProduct) {
        throw new Error("Not yet implemented.");
    }
    getTheoreticalStocks(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:constituedBy");
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
    setQuantity(quantity) {
        this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
    }
    getImages() {
        return this.getSemanticPropertyAll("dfc-b:image");
    }
    getPlannedLocalProductionFlows(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:producedBy");
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
    addImage(image) {
        this.addSemanticPropertyLiteral("dfc-b:image", image);
    }
    addPhysicalProduct(physicalProduct) {
        if (physicalProduct.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:representedBy", physicalProduct);
        }
        else {
            this.connector.store(physicalProduct);
            this.addSemanticPropertyReference("dfc-b:representedBy", physicalProduct);
        }
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    setTheoreticalStocks(theoreticalStocks) {
        this.getSemanticPropertyAll("dfc-b:constituedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        theoreticalStocks.forEach((localizedProduct) => {
            this.addSemanticPropertyReference("dfc-b:constituedBy", localizedProduct, true);
            this.connector.store(localizedProduct);
        });
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setCost(cost) {
        this.setSemanticPropertyLiteral("dfc-b:cost", cost);
    }
    setPhysicalProducts(physicalProducts) {
        this.getSemanticPropertyAll("dfc-b:representedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        physicalProducts.forEach((localizedProduct) => {
            this.addSemanticPropertyReference("dfc-b:representedBy", localizedProduct, true);
            this.connector.store(localizedProduct);
        });
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getSuppliedProducts(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasReference");
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
    getPlannedLocalConsumptionFlows(options) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:consumedBy");
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
}
//# sourceMappingURL=LocalizedProduct.js.map