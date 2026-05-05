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
const PHYSICAL_PLACE_SEM_TYPE = "dfc-b:PhysicalPlace";
export default class PhysicalPlace extends SemanticObject {
    constructor(parameters) {
        const type = PHYSICAL_PLACE_SEM_TYPE;
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
        if (parameters.hostedSaleSessions) {
            parameters.hostedSaleSessions.forEach(e => this.addHostedSaleSession(e));
        }
        if (parameters.phoneNumbers) {
            parameters.phoneNumbers.forEach(e => this.addPhoneNumber(e));
        }
        if (parameters.openingHours) {
            parameters.openingHours.forEach(e => this.addOpeningHour(e));
        }
        if (parameters.address) {
            this.setAddress(parameters.address);
        }
        if (parameters.mainContacts) {
            parameters.mainContacts.forEach(e => this.addMainContact(e));
        }
        if (parameters.theoreticalStocks) {
            parameters.theoreticalStocks.forEach(e => this.addTheoreticalStock(e));
        }
        if (parameters.realStocks) {
            parameters.realStocks.forEach(e => this.addRealStock(e));
        }
        if (parameters.features) {
            parameters.features.forEach(e => this.addFeature(e));
        }
    }
    getPhoneNumbers(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasPhoneNumber");
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
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    setHostedSaleSessions(saleSessions) {
        this.getSemanticPropertyAll("dfc-b:hosts").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        saleSessions.forEach((physicalPlace) => {
            this.addSemanticPropertyReference("dfc-b:hosts", physicalPlace, true);
            this.connector.store(physicalPlace);
        });
    }
    addOpeningHour(openingHour) {
        if (openingHour.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasOpeningHours", openingHour);
        }
        else {
            this.connector.store(openingHour);
            this.addSemanticPropertyReference("dfc-b:hasOpeningHours", openingHour);
        }
    }
    getAddress(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasAddress");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setFeatures(features) {
        this.getSemanticPropertyAll("dfc-b:hasGeoJsonFeature").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        features.forEach((physicalPlace) => {
            this.addSemanticPropertyReference("dfc-b:hasGeoJsonFeature", physicalPlace, true);
            this.connector.store(physicalPlace);
        });
    }
    setOpeningHours(openingHours) {
        this.getSemanticPropertyAll("dfc-b:hasOpeningHours").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        openingHours.forEach((physicalPlace) => {
            this.addSemanticPropertyReference("dfc-b:hasOpeningHours", physicalPlace, true);
            this.connector.store(physicalPlace);
        });
    }
    addMainContact(mainContact) {
        if (mainContact.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasMainContact", mainContact);
        }
        else {
            this.connector.store(mainContact);
            this.addSemanticPropertyReference("dfc-b:hasMainContact", mainContact);
        }
    }
    getOpeningHours(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasOpeningHours");
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
    setTheoreticalStocks(theoreticalStocks) {
        this.getSemanticPropertyAll("dfc-b:localizes").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        theoreticalStocks.forEach((physicalPlace) => {
            this.addSemanticPropertyReference("dfc-b:localizes", physicalPlace, true);
            this.connector.store(physicalPlace);
        });
    }
    removeFeature(feature) {
        throw new Error("Not yet implemented.");
    }
    setPhoneNumbers(phoneNumbers) {
        this.getSemanticPropertyAll("dfc-b:hasPhoneNumber").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        phoneNumbers.forEach((physicalPlace) => {
            this.addSemanticPropertyReference("dfc-b:hasPhoneNumber", physicalPlace, true);
            this.connector.store(physicalPlace);
        });
    }
    getTheoreticalStocks(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:localizes");
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
    addRealStock(realStock) {
        if (realStock.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:stores", realStock);
        }
        else {
            this.connector.store(realStock);
            this.addSemanticPropertyReference("dfc-b:stores", realStock);
        }
    }
    getHostedSaleSessions(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hosts");
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
    setRealStocks(realStocks) {
        this.getSemanticPropertyAll("dfc-b:stores").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        realStocks.forEach((physicalPlace) => {
            this.addSemanticPropertyReference("dfc-b:stores", physicalPlace, true);
            this.connector.store(physicalPlace);
        });
    }
    removeHostedSaleSession() {
        throw new Error("Not yet implemented.");
    }
    removeTheoreticalStock(theoreticalStock) {
        throw new Error("Not yet implemented.");
    }
    setMainContacts(mainContacts) {
        this.getSemanticPropertyAll("dfc-b:hasMainContact").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        mainContacts.forEach((physicalPlace) => {
            this.addSemanticPropertyReference("dfc-b:hasMainContact", physicalPlace, true);
            this.connector.store(physicalPlace);
        });
    }
    removeRealStock(realStock) {
        throw new Error("Not yet implemented.");
    }
    setAddress(address) {
        this.setSemanticPropertyReference("dfc-b:hasAddress", address);
        this.connector.store(address);
    }
    getMainContacts(options) {
        var _a, e_5, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasMainContact");
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
    getRealStocks(options) {
        var _a, e_6, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:stores");
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
    addTheoreticalStock(theoreticalStock) {
        if (theoreticalStock.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:localizes", theoreticalStock);
        }
        else {
            this.connector.store(theoreticalStock);
            this.addSemanticPropertyReference("dfc-b:localizes", theoreticalStock);
        }
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    addFeature(feature) {
        if (feature.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasGeoJsonFeature", feature);
        }
        else {
            this.connector.store(feature);
            this.addSemanticPropertyReference("dfc-b:hasGeoJsonFeature", feature);
        }
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    addPhoneNumber(phoneNumber) {
        if (phoneNumber.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasPhoneNumber", phoneNumber);
        }
        else {
            this.connector.store(phoneNumber);
            this.addSemanticPropertyReference("dfc-b:hasPhoneNumber", phoneNumber);
        }
    }
    removeMainContact(mainContact) {
        throw new Error("Not yet implemented.");
    }
    removeOpeningHour(openingHour) {
        throw new Error("Not yet implemented.");
    }
    getFeatures(options) {
        var _a, e_7, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasGeoJsonFeature");
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
    addHostedSaleSession(saleSession) {
        if (saleSession.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hosts", saleSession);
        }
        else {
            this.connector.store(saleSession);
            this.addSemanticPropertyReference("dfc-b:hosts", saleSession);
        }
    }
    removePhoneNumber(phoneNumber) {
        throw new Error("Not yet implemented.");
    }
}
//# sourceMappingURL=PhysicalPlace.js.map