/*
 * MIT License
 *
 * Copyright (c) 2023 Maxime Lecoq <maxime@lecoqlibre.fr>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
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
export default class Enterprise extends Agent {
    constructor(parameters) {
        const type = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Enterprise";
        if (parameters.other) {
            super({ connector: parameters.connector, semanticId: parameters.semanticId, other: parameters.other });
            if (!parameters.other.isSemanticTypeOf(type))
                throw new Error("Can't create the semantic object of type " + type + " from a copy: the copy is of type " + parameters.other.getSemanticType() + ".");
        }
        else
            super({ connector: parameters.connector, semanticId: parameters.semanticId, semanticType: type, localizations: parameters.localizations });
        if (!parameters.doNotStore)
            this.connector.store(this);
        if (parameters.description)
            this.setDescription(parameters.description);
        if (parameters.vatNumber)
            this.setVatNumber(parameters.vatNumber);
        if (parameters.customerCategories)
            parameters.customerCategories.forEach(e => this.addCustomerCategory(e));
        if (parameters.catalogs)
            parameters.catalogs.forEach(e => this.maintainCatalog(e));
        if (parameters.catalogItems)
            parameters.catalogItems.forEach(e => this.manageCatalogItem(e));
        if (parameters.suppliedProducts)
            parameters.suppliedProducts.forEach(e => this.supplyProduct(e));
        if (parameters.technicalProducts)
            parameters.technicalProducts.forEach(e => this.proposeTechnicalProducts(e));
    }
    manageCatalogItem(catalogItem) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#manages";
        if (catalogItem.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, catalogItem);
        }
        else {
            this.connector.store(catalogItem);
            this.addSemanticPropertyReference(property, catalogItem);
        }
    }
    getManagedCatalogItems(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#manages");
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
    unmanageCatalogItem(catalogItem) {
        throw new Error("Not yet implemented.");
    }
    maintainCatalog(catalog) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#maintains";
        if (catalog.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, catalog);
        }
        else {
            this.connector.store(catalog);
            this.addSemanticPropertyReference(property, catalog);
        }
    }
    getMaintainedCatalogs(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#maintains");
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
    unmaintainCatalog(catalog) {
        throw new Error("Not yet implemented.");
    }
    unsupplyProduct(suppliedProduct) {
        throw new Error("Not yet implemented.");
    }
    supplyProduct(suppliedProduct) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#supplies";
        if (suppliedProduct.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, suppliedProduct);
        }
        else {
            this.connector.store(suppliedProduct);
            this.addSemanticPropertyReference(property, suppliedProduct);
        }
    }
    getSuppliedProducts(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#supplies");
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
    unproposeTechnicalProducts(technicalProducts) {
        throw new Error("Not yet implemented.");
    }
    proposeTechnicalProducts(technicalProducts) {
        const property = "";
        if (technicalProducts.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, technicalProducts);
        }
        else {
            this.connector.store(technicalProducts);
            this.addSemanticPropertyReference(property, technicalProducts);
        }
    }
    getProposedTechnicalProducts(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("");
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
    setDescription(description) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasDescription";
        this.setSemanticPropertyLiteral(property, description);
    }
    getDescription() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasDescription");
    }
    setVatNumber(vatNumber) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#VATnumber";
        this.setSemanticPropertyLiteral(property, vatNumber);
    }
    getVatNumber() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#VATnumber");
    }
    getCustomerCategories(options) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#defines");
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
    addCustomerCategory(customerCategory) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#defines";
        if (customerCategory.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, customerCategory);
        }
        else {
            this.connector.store(customerCategory);
            this.addSemanticPropertyReference(property, customerCategory);
        }
    }
}
//# sourceMappingURL=Enterprise.js.map