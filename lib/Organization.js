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
import Agent from "./Agent.js";
const ORGANIZATION_SEM_TYPE = "dfc-b:Organization";
export default class Organization extends Agent {
    constructor(parameters) {
        const type = ORGANIZATION_SEM_TYPE;
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
                logo: parameters.logo,
                customerCategoriesMembership: parameters.customerCategoriesMembership
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
        if (parameters.templateSaleSessions) {
            parameters.templateSaleSessions.forEach(e => this.addTemplateSaleSession(e));
        }
        if (parameters.certifications) {
            parameters.certifications.forEach(e => this.addCertification(e));
        }
    }
    unproposeTechnicalProducts(technicalProducts) {
        throw new Error("Not yet implemented.");
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
    setTemplateSaleSessions(templateSaleSessions) {
        this.getSemanticPropertyAll("dfc-b:hasTemplateSaleSession").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        templateSaleSessions.forEach((organization) => {
            this.addSemanticPropertyReference("dfc-b:hasTemplateSaleSession", organization, true);
            this.connector.store(organization);
        });
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
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    getMaintainedCatalogs(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:maintains");
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
    setManagedCatalogItems(catalogItems) {
    }
    setSuppliedProducts(suppliedProducts) {
    }
    setVatNumber(vatNumber) {
        this.setSemanticPropertyLiteral("dfc-b:VATnumber", vatNumber);
    }
    getTemplateSaleSessions(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasTemplateSaleSession");
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
    addCertification(certification) {
        if (certification.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:isCertifiedBy", certification);
        }
        else {
            this.connector.store(certification);
            this.addSemanticPropertyReference("dfc-b:isCertifiedBy", certification);
        }
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:hasDescription");
    }
    setCertifications(certifications) {
        this.getSemanticPropertyAll("dfc-b:isCertifiedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        certifications.forEach((organization) => {
            this.addSemanticPropertyReference("dfc-b:isCertifiedBy", organization, true);
            this.connector.store(organization);
        });
    }
    setCustomerCategories(customerCategories) {
        this.getSemanticPropertyAll("dfc-b:defines").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        customerCategories.forEach((organization) => {
            this.addSemanticPropertyReference("dfc-b:defines", organization, true);
            this.connector.store(organization);
        });
    }
    getProposedTechnicalProducts(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:proposes");
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
    unmanageCatalogItem(catalogItem) {
        throw new Error("Not yet implemented.");
    }
    getSuppliedProducts(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:supplies");
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
        this.setSemanticPropertyLiteral("dfc-b:hasDescription", description);
    }
    unmaintainCatalog(catalog) {
        throw new Error("Not yet implemented.");
    }
    removeCertification(certification) {
        throw new Error("Not yet implemented.");
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
    supplyProduct(suppliedProduct) {
        if (suppliedProduct.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:supplies", suppliedProduct);
        }
        else {
            this.connector.store(suppliedProduct);
            this.addSemanticPropertyReference("dfc-b:supplies", suppliedProduct);
        }
    }
    getVatNumber() {
        return this.getSemanticProperty("dfc-b:VATnumber");
    }
    addTemplateSaleSession(templateSaleSession) {
        if (templateSaleSession.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasTemplateSaleSession", templateSaleSession);
        }
        else {
            this.connector.store(templateSaleSession);
            this.addSemanticPropertyReference("dfc-b:hasTemplateSaleSession", templateSaleSession);
        }
    }
    unsupplyProduct(suppliedProduct) {
        throw new Error("Not yet implemented.");
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    setMainContact(mainContact) {
        this.setSemanticPropertyReference("dfc-b:hasMainContact", mainContact);
        this.connector.store(mainContact);
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
    getCertifications(options) {
        var _a, e_6, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:isCertifiedBy");
            try {
                for (var _d = true, properties_6 = __asyncValues(properties), properties_6_1; properties_6_1 = yield properties_6.next(), _a = properties_6_1.done, !_a;) {
                    _c = properties_6_1.value;
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
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = properties_6.return)) yield _b.call(properties_6);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return results;
        });
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
    removeCustomerCategory(customerCategory) {
        throw new Error("Not yet implemented.");
    }
    getManagedCatalogItems(options) {
        var _a, e_7, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:manages");
            try {
                for (var _d = true, properties_7 = __asyncValues(properties), properties_7_1; properties_7_1 = yield properties_7.next(), _a = properties_7_1.done, !_a;) {
                    _c = properties_7_1.value;
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
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = properties_7.return)) yield _b.call(properties_7);
                }
                finally { if (e_7) throw e_7.error; }
            }
            return results;
        });
    }
    removeTemplateSaleSession(templateSaleSession) {
        throw new Error("Not yet implemented.");
    }
    setProposedTechnicalProducts(technicalProducts) {
        this.getSemanticPropertyAll("dfc-b:proposes").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        technicalProducts.forEach((organization) => {
            this.addSemanticPropertyReference("dfc-b:proposes", organization, true);
            this.connector.store(organization);
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
}
//# sourceMappingURL=Organization.js.map