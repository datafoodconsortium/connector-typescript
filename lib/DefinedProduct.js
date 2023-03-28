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
import { SemanticObject } from "@virtual-assembly/semantizer";
export default class DefinedProduct extends SemanticObject {
    constructor(parameters) {
        if (parameters.other)
            super({ semanticId: parameters.semanticId, other: parameters.other });
        else
            super({ semanticId: parameters.semanticId, semanticType: parameters.semanticType });
        this.connector = parameters.connector;
        if (parameters.name)
            this.setName(parameters.name);
        if (parameters.description)
            this.setDescription(parameters.description);
        if (parameters.productType)
            this.setProductType(parameters.productType);
        if (parameters.quantity)
            this.setQuantity(parameters.quantity);
        if (parameters.alcoholPercentage || parameters.alcoholPercentage === 0)
            this.setAlcoholPercentage(parameters.alcoholPercentage);
        if (parameters.lifetime)
            this.setLifetime(parameters.lifetime);
        if (parameters.claims)
            parameters.claims.forEach(e => this.addClaim(e));
        if (parameters.usageOrStorageConditions)
            this.setUsageOrStorageConditions(parameters.usageOrStorageConditions);
        if (parameters.allergenCharacteristics)
            parameters.allergenCharacteristics.forEach(e => this.addAllergenCharacteristic(e));
        if (parameters.nutrientCharacteristics)
            parameters.nutrientCharacteristics.forEach(e => this.addNutrientCharacteristic(e));
        if (parameters.physicalCharacteristics)
            parameters.physicalCharacteristics.forEach(e => this.addPhysicalCharacteristic(e));
        if (parameters.geographicalOrigin)
            this.setGeographicalOrigin(parameters.geographicalOrigin);
        if (parameters.catalogItems)
            parameters.catalogItems.forEach(e => this.addCatalogItem(e));
        if (parameters.certifications)
            parameters.certifications.forEach(e => this.addCertification(e));
        if (parameters.natureOrigin)
            parameters.natureOrigin.forEach(e => this.addNatureOrigin(e));
        if (parameters.partOrigin)
            parameters.partOrigin.forEach(e => this.addPartOrigin(e));
    }
    setName(name) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#name";
        this.setSemanticPropertyLiteral(property, name);
    }
    getName() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#name");
    }
    getPartOrigin(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPartOrigin");
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
    addNutrientCharacteristic(nutrientCharacteristic) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasNutrientCharacteristic";
        if (nutrientCharacteristic.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, nutrientCharacteristic);
        }
        else {
            this.connector.store(nutrientCharacteristic);
            this.addSemanticPropertyReference(property, nutrientCharacteristic);
        }
    }
    getUsageOrStorageConditions() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#usageOrStorageCondition");
    }
    getGeographicalOrigin(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasGeographicalOrigin");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    getAlcoholPercentage() {
        return Number(this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#alcoholPercentage"));
    }
    removeAllergenCharacteristic(allergenCharacteristic) {
        throw new Error("Not yet implemented.");
    }
    getNutrientCharacteristics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const blankNodesId = this.getSemanticPropertyAnonymousAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasNutrientCharacteristic");
            blankNodesId.forEach(blankNodeId => {
                const blankNode = this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
                results.push(blankNode);
            });
            return results;
        });
    }
    getPhysicalCharacteristics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const blankNodesId = this.getSemanticPropertyAnonymousAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPhysicalCharacteristic");
            blankNodesId.forEach(blankNodeId => {
                const blankNode = this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
                results.push(blankNode);
            });
            return results;
        });
    }
    removeNatureOrigin(natureOrigin) {
        throw new Error("Not yet implemented.");
    }
    getNatureOrigin(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasNatureOrigin");
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
    addPartOrigin(partOrigin) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPartOrigin";
        if (partOrigin.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, partOrigin);
        }
        else {
            this.connector.store(partOrigin);
            this.addSemanticPropertyReference(property, partOrigin);
        }
    }
    removeNutrientCharacteristic(nutrientCharacteristic) {
        throw new Error("Not yet implemented.");
    }
    setLifetime(lifetime) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#lifetime";
        this.setSemanticPropertyLiteral(property, lifetime);
    }
    setAlcoholPercentage(alcoholPercentage) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#alcoholPercentage";
        this.setSemanticPropertyLiteral(property, alcoholPercentage);
    }
    addPhysicalCharacteristic(physicalCharacteristic) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPhysicalCharacteristic";
        if (physicalCharacteristic.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, physicalCharacteristic);
        }
        else {
            this.connector.store(physicalCharacteristic);
            this.addSemanticPropertyReference(property, physicalCharacteristic);
        }
    }
    getAllergenCharacteristics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const blankNodesId = this.getSemanticPropertyAnonymousAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasAllergenCharacteristic");
            blankNodesId.forEach(blankNodeId => {
                const blankNode = this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
                results.push(blankNode);
            });
            return results;
        });
    }
    getLifetime() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#lifetime");
    }
    addNatureOrigin(natureOrigin) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasNatureOrigin";
        if (natureOrigin.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, natureOrigin);
        }
        else {
            this.connector.store(natureOrigin);
            this.addSemanticPropertyReference(property, natureOrigin);
        }
    }
    addAllergenCharacteristic(allergenCharacteristic) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasAllergenCharacteristic";
        if (allergenCharacteristic.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, allergenCharacteristic);
        }
        else {
            this.connector.store(allergenCharacteristic);
            this.addSemanticPropertyReference(property, allergenCharacteristic);
        }
    }
    removePhysicalCharacteristic(physicalCharacteristic) {
        throw new Error("Not yet implemented.");
    }
    removePartOrigin(partOrigin) {
        throw new Error("Not yet implemented.");
    }
    setUsageOrStorageConditions(usageOrStorageConditions) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#usageOrStorageCondition";
        this.setSemanticPropertyLiteral(property, usageOrStorageConditions);
    }
    setGeographicalOrigin(geographicalOrigin) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasGeographicalOrigin";
        this.setSemanticPropertyReference(property, geographicalOrigin);
        this.connector.store(geographicalOrigin);
    }
    setDescription(description) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#description";
        this.setSemanticPropertyLiteral(property, description);
    }
    getDescription() {
        return this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#description");
    }
    removeCertification(certification) {
        throw new Error("Not yet implemented.");
    }
    getCertifications(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCertification");
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
    addCertification(certification) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasCertification";
        if (certification.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, certification);
        }
        else {
            this.connector.store(certification);
            this.addSemanticPropertyReference(property, certification);
        }
    }
    getQuantity(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const blankNode = this.getSemanticPropertyAnonymous("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasQuantity");
            return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
        });
    }
    getProductType(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasType");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    removeClaim(claim) {
        throw new Error("Not yet implemented.");
    }
    getClaims(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasClaim");
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
    addClaim(claim) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasClaim";
        if (claim.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, claim);
        }
        else {
            this.connector.store(claim);
            this.addSemanticPropertyReference(property, claim);
        }
    }
    setProductType(productType) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasType";
        this.setSemanticPropertyReference(property, productType);
        this.connector.store(productType);
    }
    setQuantity(quantity) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasQuantity";
        this.setSemanticPropertyAnonymous(property, quantity);
    }
    addCatalogItem(catalogItem) {
        const property = "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#referencedBy";
        if (catalogItem.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous(property, catalogItem);
        }
        else {
            this.connector.store(catalogItem);
            this.addSemanticPropertyReference(property, catalogItem);
        }
    }
    getCatalogItems(options) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#referencedBy");
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
//# sourceMappingURL=DefinedProduct.js.map