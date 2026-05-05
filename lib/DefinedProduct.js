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
        if (parameters.other) {
            super({
                semantizer: parameters.connector.getSemantizer(),
                semanticId: parameters.semanticId,
                other: parameters.other,
            });
        }
        else {
            super({
                semantizer: parameters.connector.getSemantizer(),
                semanticId: parameters.semanticId,
                semanticType: parameters.semanticType,
            });
        }
        this.connector = parameters.connector;
        if (parameters.name) {
            this.setName(parameters.name);
        }
        if (parameters.description) {
            this.setDescription(parameters.description);
        }
        if (parameters.productType) {
            this.setProductType(parameters.productType);
        }
        if (parameters.quantity) {
            this.setQuantity(parameters.quantity);
        }
        if (parameters.alcoholPercentage || parameters.alcoholPercentage === 0) {
            this.setAlcoholPercentage(parameters.alcoholPercentage);
        }
        if (parameters.lifetime) {
            this.setLifetime(parameters.lifetime);
        }
        if (parameters.claims) {
            parameters.claims.forEach(e => this.addClaim(e));
        }
        if (parameters.usageOrStorageConditions) {
            this.setUsageOrStorageConditions(parameters.usageOrStorageConditions);
        }
        if (parameters.allergenCharacteristics) {
            parameters.allergenCharacteristics.forEach(e => this.addAllergenCharacteristic(e));
        }
        if (parameters.nutrientCharacteristics) {
            parameters.nutrientCharacteristics.forEach(e => this.addNutrientCharacteristic(e));
        }
        if (parameters.physicalCharacteristics) {
            parameters.physicalCharacteristics.forEach(e => this.addPhysicalCharacteristic(e));
        }
        if (parameters.geographicalOrigin) {
            this.setGeographicalOrigin(parameters.geographicalOrigin);
        }
        if (parameters.catalogItems) {
            parameters.catalogItems.forEach(e => this.addCatalogItem(e));
        }
        if (parameters.certifications) {
            parameters.certifications.forEach(e => this.addCertification(e));
        }
        if (parameters.natureOrigin) {
            parameters.natureOrigin.forEach(e => this.addNatureOrigin(e));
        }
        if (parameters.partOrigin) {
            parameters.partOrigin.forEach(e => this.addPartOrigin(e));
        }
        if (parameters.images) {
            parameters.images.forEach(e => this.addImage(e));
        }
        if (parameters.variants) {
            parameters.variants.forEach(e => this.addVariant(e));
        }
        if (parameters.referenceProductOptions) {
            parameters.referenceProductOptions.forEach(e => this.addReferenceProductOption(e));
        }
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    removeVariant(variant) {
        throw new Error("Not yet implemented.");
    }
    getLifetime() {
        return this.getSemanticProperty("dfc-b:lifetime");
    }
    addClaim(claim) {
        if (claim.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasClaim", claim);
        }
        else {
            this.connector.store(claim);
            this.addSemanticPropertyReference("dfc-b:hasClaim", claim);
        }
    }
    addCatalogItem(catalogItem) {
        if (catalogItem.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:referencedBy", catalogItem);
        }
        else {
            this.connector.store(catalogItem);
            this.addSemanticPropertyReference("dfc-b:referencedBy", catalogItem);
        }
    }
    getVariants(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasVariant");
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
    getCatalogItems(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:referencedBy");
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
    getAllergenCharacteristics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const blankNodesId = this.getSemanticPropertyAnonymousAll("dfc-b:hasAllergenCharacteristic");
            blankNodesId.forEach(blankNodeId => {
                const blankNode = this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
                results.push(blankNode);
            });
            return results;
        });
    }
    getNutrientCharacteristics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const blankNodesId = this.getSemanticPropertyAnonymousAll("dfc-b:hasNutrientCharacteristic");
            blankNodesId.forEach(blankNodeId => {
                const blankNode = this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
                results.push(blankNode);
            });
            return results;
        });
    }
    addPartOrigin(partOrigin) {
        if (partOrigin.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasPartOrigin", partOrigin);
        }
        else {
            this.connector.store(partOrigin);
            this.addSemanticPropertyReference("dfc-b:hasPartOrigin", partOrigin);
        }
    }
    getGeographicalOrigin(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasGeographicalOrigin");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    removeAllergenCharacteristic(allergenCharacteristic) {
        throw new Error("Not yet implemented.");
    }
    getCertifications(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasCertification");
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
    getPhysicalCharacteristics(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const blankNodesId = this.getSemanticPropertyAnonymousAll("dfc-b:hasPhysicalCharacteristic");
            blankNodesId.forEach(blankNodeId => {
                const blankNode = this.connector.getDefaultFactory().createFromRdfDataset(blankNodeId);
                results.push(blankNode);
            });
            return results;
        });
    }
    getPartOrigin(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasPartOrigin");
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
    addReferenceProductOption(referenceProductOption) {
        if (referenceProductOption.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasReferenceProductOption", referenceProductOption);
        }
        else {
            this.connector.store(referenceProductOption);
            this.addSemanticPropertyReference("dfc-b:hasReferenceProductOption", referenceProductOption);
        }
    }
    setGeographicalOrigin(geographicalOrigin) {
        this.setSemanticPropertyReference("dfc-b:hasGeographicalOrigin", geographicalOrigin);
        this.connector.store(geographicalOrigin);
    }
    getNatureOrigin(options) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasNatureOrigin");
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
    addImage(image) {
        this.addSemanticPropertyLiteral("dfc-b:image", image);
    }
    addNutrientCharacteristic(nutrientCharacteristic) {
        if (nutrientCharacteristic.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasNutrientCharacteristic", nutrientCharacteristic);
        }
        else {
            this.connector.store(nutrientCharacteristic);
            this.addSemanticPropertyReference("dfc-b:hasNutrientCharacteristic", nutrientCharacteristic);
        }
    }
    setUsageOrStorageConditions(usageOrStorageConditions) {
        this.setSemanticPropertyLiteral("dfc-b:usageOrStorageCondition", usageOrStorageConditions);
    }
    setAlcoholPercentage(alcoholPercentage) {
        this.setSemanticPropertyLiteral("dfc-b:alcoholPercentage", alcoholPercentage);
    }
    getQuantity() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
    getProductType(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasType");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    addCertification(certification) {
        if (certification.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasCertification", certification);
        }
        else {
            this.connector.store(certification);
            this.addSemanticPropertyReference("dfc-b:hasCertification", certification);
        }
    }
    addNatureOrigin(natureOrigin) {
        if (natureOrigin.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasNatureOrigin", natureOrigin);
        }
        else {
            this.connector.store(natureOrigin);
            this.addSemanticPropertyReference("dfc-b:hasNatureOrigin", natureOrigin);
        }
    }
    setQuantity(quantity) {
        this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
    }
    removeNutrientCharacteristic(nutrientCharacteristic) {
        throw new Error("Not yet implemented.");
    }
    setLifetime(lifetime) {
        this.setSemanticPropertyLiteral("dfc-b:lifetime", lifetime);
    }
    addVariant(variant) {
        if (variant.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasVariant", variant);
        }
        else {
            this.connector.store(variant);
            this.addSemanticPropertyReference("dfc-b:hasVariant", variant);
        }
    }
    removePartOrigin(partOrigin) {
        throw new Error("Not yet implemented.");
    }
    getUsageOrStorageConditions() {
        return this.getSemanticProperty("dfc-b:usageOrStorageCondition");
    }
    removeCertification(certification) {
        throw new Error("Not yet implemented.");
    }
    setImages(image) {
        this.setSemanticPropertyLiteralAll("dfc-b:image", image);
    }
    removeClaim(claim) {
        throw new Error("Not yet implemented.");
    }
    addAllergenCharacteristic(allergenCharacteristic) {
        if (allergenCharacteristic.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasAllergenCharacteristic", allergenCharacteristic);
        }
        else {
            this.connector.store(allergenCharacteristic);
            this.addSemanticPropertyReference("dfc-b:hasAllergenCharacteristic", allergenCharacteristic);
        }
    }
    removeImage(image) {
        throw new Error("Not yet implemented.");
    }
    setReferenceProductOptions(referenceProductOptions) {
        this.getSemanticPropertyAll("dfc-b:hasReferenceProductOption").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        referenceProductOptions.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasReferenceProductOption", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    setVariants(variants) {
        this.getSemanticPropertyAll("dfc-b:hasVariant").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        variants.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasVariant", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    getImages() {
        return this.getSemanticPropertyAll("dfc-b:image");
    }
    removePhysicalCharacteristic(physicalCharacteristic) {
        throw new Error("Not yet implemented.");
    }
    getReferenceProductOptions(options) {
        var _a, e_6, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasReferenceProductOption");
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
    setProductType(productType) {
        this.setSemanticPropertyReference("dfc-b:hasType", productType);
        this.connector.store(productType);
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    removeReferenceProductOption(referenceProductOption) {
        throw new Error("Not yet implemented.");
    }
    addPhysicalCharacteristic(physicalCharacteristic) {
        if (physicalCharacteristic.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasPhysicalCharacteristic", physicalCharacteristic);
        }
        else {
            this.connector.store(physicalCharacteristic);
            this.addSemanticPropertyReference("dfc-b:hasPhysicalCharacteristic", physicalCharacteristic);
        }
    }
    getAlcoholPercentage() {
        return Number(this.getSemanticProperty("dfc-b:alcoholPercentage"));
    }
    getClaims(options) {
        var _a, e_7, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasClaim");
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
    removeNatureOrigin(natureOrigin) {
        throw new Error("Not yet implemented.");
    }
}
//# sourceMappingURL=DefinedProduct.js.map