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
import Agent from "./Agent.js";
const ENTERPRISE_SEM_TYPE = "dfc-b:Enterprise";
export default class Enterprise extends Agent {
    constructor(parameters) {
        const type = ENTERPRISE_SEM_TYPE;
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
                localizations: parameters.localizations,
                logo: parameters.logo
            });
        }
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
        if (parameters.name) {
            this.setName(parameters.name);
        }
        if (parameters.description) {
            this.setDescription(parameters.description);
        }
        if (parameters.vatNumber) {
            this.setVatNumber(parameters.vatNumber);
        }
        if (parameters.customerCategories) {
            parameters.customerCategories.forEach(e => this.addCustomerCategory(e));
        }
        if (parameters.catalogs) {
            parameters.catalogs.forEach(e => this.maintainCatalog(e));
        }
        if (parameters.catalogItems) {
            parameters.catalogItems.forEach(e => this.manageCatalogItem(e));
        }
        if (parameters.suppliedProducts) {
            parameters.suppliedProducts.forEach(e => this.supplyProduct(e));
        }
        if (parameters.technicalProducts) {
            parameters.technicalProducts.forEach(e => this.proposeTechnicalProducts(e));
        }
        if (parameters.mainContact) {
            this.setMainContact(parameters.mainContact);
        }
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    getMainContact(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasMainContact");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    manageCatalogItem(catalogItem) {
        if (catalogItem.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:manages", catalogItem);
        }
        else {
            this.connector.store(catalogItem);
            this.addSemanticPropertyReference("dfc-b:manages", catalogItem);
        }
    }
    unmanageCatalogItem(catalogItem) {
        throw new Error("Not yet implemented.");
    }
    setMainContact(mainContact) {
        this.setSemanticPropertyReference("dfc-b:hasMainContact", mainContact);
        this.connector.store(mainContact);
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:hasDescription");
    }
    unmaintainCatalog(catalog) {
        throw new Error("Not yet implemented.");
    }
    getManagedCatalogItems(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:manages");
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
    addCustomerCategory(customerCategory) {
        if (customerCategory.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:defines", customerCategory);
        }
        else {
            this.connector.store(customerCategory);
            this.addSemanticPropertyReference("dfc-b:defines", customerCategory);
        }
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:hasDescription", description);
    }
    supplyProduct(suppliedProduct) {
        if (suppliedProduct.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:supplies", suppliedProduct);
        }
        else {
            this.connector.store(suppliedProduct);
            this.addSemanticPropertyReference("dfc-b:supplies", suppliedProduct);
        }
    }
    maintainCatalog(catalog) {
        if (catalog.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:maintains", catalog);
        }
        else {
            this.connector.store(catalog);
            this.addSemanticPropertyReference("dfc-b:maintains", catalog);
        }
    }
    getSuppliedProducts(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:supplies");
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
    unsupplyProduct(suppliedProduct) {
        throw new Error("Not yet implemented.");
    }
    setVatNumber(vatNumber) {
        this.setSemanticPropertyLiteral("dfc-b:VATnumber", vatNumber);
    }
    getMaintainedCatalogs(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:maintains");
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
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getProposedTechnicalProducts(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:proposes");
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
    getCustomerCategories(options) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:defines");
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
    getVatNumber() {
        return this.getSemanticProperty("dfc-b:VATnumber");
    }
    unproposeTechnicalProducts(technicalProducts) {
        throw new Error("Not yet implemented.");
    }
    proposeTechnicalProducts(technicalProducts) {
        if (technicalProducts.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:proposes", technicalProducts);
        }
        else {
            this.connector.store(technicalProducts);
            this.addSemanticPropertyReference("dfc-b:proposes", technicalProducts);
        }
    }
}
//# sourceMappingURL=Enterprise.js.map