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
    addNatureOrigin(natureOrigin) {
        if (natureOrigin.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasNatureOrigin", natureOrigin);
        }
        else {
            this.connector.store(natureOrigin);
            this.addSemanticPropertyReference("dfc-b:hasNatureOrigin", natureOrigin);
        }
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
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
    getNatureOrigin(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasNatureOrigin");
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
    setClaims(claims) {
        this.getSemanticPropertyAll("dfc-b:hasClaim").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        claims.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasClaim", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    getClaims(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasClaim");
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
    setLifetime(lifetime) {
        this.setSemanticPropertyLiteral("dfc-b:lifetime", lifetime);
    }
    setNatureOrigins(natureOrigin) {
        this.getSemanticPropertyAll("dfc-b:hasNatureOrigin").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        natureOrigin.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasNatureOrigin", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    removeAllergenCharacteristic(allergenCharacteristic) {
        throw new Error("Not yet implemented.");
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
    getReferenceProductOptions(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasReferenceProductOption");
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
    getLifetime() {
        return this.getSemanticProperty("dfc-b:lifetime");
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
    removeReferenceProductOption(referenceProductOption) {
        throw new Error("Not yet implemented.");
    }
    addImage(image) {
        this.addSemanticPropertyLiteral("dfc-b:image", image);
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
    getCatalogItems(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:referencedBy");
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
    getAlcoholPercentage() {
        return Number(this.getSemanticProperty("dfc-b:alcoholPercentage"));
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
    removeCatalogItem(catalogItem) {
        throw new Error("Not yet implemented.");
    }
    setQuantity(quantity) {
        this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
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
    setGeographicalOrigin(geographicalOrigin) {
        this.setSemanticPropertyReference("dfc-b:hasGeographicalOrigin", geographicalOrigin);
        this.connector.store(geographicalOrigin);
    }
    getQuantity() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
    removeClaim(claim) {
        throw new Error("Not yet implemented.");
    }
    setNutrientCharacteristics(nutrientCharacteristics) {
        this.getSemanticPropertyAll("dfc-b:hasNutrientCharacteristic").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        nutrientCharacteristics.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasNutrientCharacteristic", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    setProductType(productType) {
        this.setSemanticPropertyReference("dfc-b:hasType", productType);
        this.connector.store(productType);
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
    addReferenceProductOption(referenceProductOption) {
        if (referenceProductOption.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasReferenceProductOption", referenceProductOption);
        }
        else {
            this.connector.store(referenceProductOption);
            this.addSemanticPropertyReference("dfc-b:hasReferenceProductOption", referenceProductOption);
        }
    }
    getUsageOrStorageConditions() {
        return this.getSemanticProperty("dfc-b:usageOrStorageCondition");
    }
    setAlcoholPercentage(alcoholPercentage) {
        this.setSemanticPropertyLiteral("dfc-b:alcoholPercentage", alcoholPercentage);
    }
    setCatalogItems(catalogItems) {
        this.getSemanticPropertyAll("dfc-b:referencedBy").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        catalogItems.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:referencedBy", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    setUsageOrStorageConditions(usageOrStorageConditions) {
        this.setSemanticPropertyLiteral("dfc-b:usageOrStorageCondition", usageOrStorageConditions);
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
    setImages(image) {
        this.setSemanticPropertyLiteralAll("dfc-b:image", image);
    }
    removeNatureOrigin(natureOrigin) {
        throw new Error("Not yet implemented.");
    }
    removeNutrientCharacteristic(nutrientCharacteristic) {
        throw new Error("Not yet implemented.");
    }
    removeImage(image) {
        throw new Error("Not yet implemented.");
    }
    removeVariant(variant) {
        throw new Error("Not yet implemented.");
    }
    getCertifications(options) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasCertification");
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
    getImages() {
        return this.getSemanticPropertyAll("dfc-b:image");
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
    setCertifications(certifications) {
        this.getSemanticPropertyAll("dfc-b:hasCertification").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        certifications.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasCertification", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    removePartOrigin(partOrigin) {
        throw new Error("Not yet implemented.");
    }
    setPhysicalCharacteristics(physicalCharacteristics) {
        this.getSemanticPropertyAll("dfc-b:hasPhysicalCharacteristic").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        physicalCharacteristics.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasPhysicalCharacteristic", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    getVariants(options) {
        var _a, e_6, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasVariant");
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
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    setPartOrigins(partOrigin) {
        this.getSemanticPropertyAll("dfc-b:hasPartOrigin").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        partOrigin.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasPartOrigin", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
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
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    removeCertification(certification) {
        throw new Error("Not yet implemented.");
    }
    removePhysicalCharacteristic(physicalCharacteristic) {
        throw new Error("Not yet implemented.");
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
    setAllergenCharacteristics(allergenCharacteristics) {
        this.getSemanticPropertyAll("dfc-b:hasAllergenCharacteristic").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        allergenCharacteristics.forEach((definedProduct) => {
            this.addSemanticPropertyReference("dfc-b:hasAllergenCharacteristic", definedProduct, true);
            this.connector.store(definedProduct);
        });
    }
    getPartOrigin(options) {
        var _a, e_7, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasPartOrigin");
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
}
//# sourceMappingURL=DefinedProduct.js.map