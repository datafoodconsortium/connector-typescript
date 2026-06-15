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
const SALE_SESSION_SEM_TYPE = "dfc-b:SaleSession";
export default class SaleSession extends SemanticObject {
    constructor(parameters) {
        const type = SALE_SESSION_SEM_TYPE;
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
        if (parameters.beginDate) {
            this.setBeginDate(parameters.beginDate);
        }
        if (parameters.endDate) {
            this.setEndDate(parameters.endDate);
        }
        if (parameters.quantity || parameters.quantity === 0) {
            this.setQuantity(parameters.quantity);
        }
        if (parameters.offers) {
            parameters.offers.forEach(e => this.addOffer(e));
        }
        if (parameters.hostingPlaces) {
            parameters.hostingPlaces.forEach(e => this.addHostingPlace(e));
        }
    }
    addHostingPlace(hostingPlace) {
        if (hostingPlace.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hostedAt", hostingPlace);
        }
        else {
            this.connector.store(hostingPlace);
            this.addSemanticPropertyReference("dfc-b:hostedAt", hostingPlace);
        }
    }
    setBeginDate(beginDate) {
        this.setSemanticPropertyLiteral("dfc-b:beginDate", beginDate);
    }
    setEndDate(endDate) {
        this.setSemanticPropertyLiteral("dfc-b:endDate", endDate);
    }
    addOffer(offer) {
        if (offer.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:lists", offer);
        }
        else {
            this.connector.store(offer);
            this.addSemanticPropertyReference("dfc-b:lists", offer);
        }
    }
    setQuantity(quantity) {
        this.setSemanticPropertyLiteral("dfc-b:quantity", quantity);
    }
    getOffers(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:lists");
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
    setHostingPlaces(hostingPlaces) {
        this.getSemanticPropertyAll("dfc-b:hostedAt").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        hostingPlaces.forEach((saleSession) => {
            this.addSemanticPropertyReference("dfc-b:hostedAt", saleSession, true);
            this.connector.store(saleSession);
        });
    }
    setOffers(offers) {
        this.getSemanticPropertyAll("dfc-b:lists").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        offers.forEach((saleSession) => {
            this.addSemanticPropertyReference("dfc-b:lists", saleSession, true);
            this.connector.store(saleSession);
        });
    }
    getBeginDate() {
        return this.getSemanticProperty("dfc-b:beginDate");
    }
    removeOffer(offer) {
        throw new Error("Not yet implemented.");
    }
    getQuantity() {
        return Number(this.getSemanticProperty("dfc-b:quantity"));
    }
    getEndDate() {
        return this.getSemanticProperty("dfc-b:endDate");
    }
    removeHostingPlace(hostingPlace) {
        throw new Error("Not yet implemented.");
    }
    getHostingPlaces(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hostedAt");
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
}
//# sourceMappingURL=SaleSession.js.map