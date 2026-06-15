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
const TEMPLATE_SALE_SESSION_SEM_TYPE = "dfc-b:TemplateSaleSession";
export default class TemplateSaleSession extends SemanticObject {
    constructor(parameters) {
        const type = TEMPLATE_SALE_SESSION_SEM_TYPE;
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
        if (parameters.hostingPlaces) {
            parameters.hostingPlaces.forEach(e => this.addHostingPlace(e));
        }
        if (parameters.organizations) {
            parameters.organizations.forEach(e => this.addOrganization(e));
        }
    }
    getDate() {
        return this.getSemanticProperty("dfc-b:date");
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
    removeOrganization(organization) {
        throw new Error("Not yet implemented.");
    }
    setHostingPlaces(hostingPlaces) {
        this.getSemanticPropertyAll("dfc-b:hostedAt").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        hostingPlaces.forEach((templateSaleSession) => {
            this.addSemanticPropertyReference("dfc-b:hostedAt", templateSaleSession, true);
            this.connector.store(templateSaleSession);
        });
    }
    setOrganizations(organizations) {
        this.getSemanticPropertyAll("dfc-b:isTemplateSaleSessionOf").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        organizations.forEach((templateSaleSession) => {
            this.addSemanticPropertyReference("dfc-b:isTemplateSaleSessionOf", templateSaleSession, true);
            this.connector.store(templateSaleSession);
        });
    }
    setDate(date) {
        this.setSemanticPropertyLiteral("dfc-b:date", date);
    }
    addOrganization(organization) {
        if (organization.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:isTemplateSaleSessionOf", organization);
        }
        else {
            this.connector.store(organization);
            this.addSemanticPropertyReference("dfc-b:isTemplateSaleSessionOf", organization);
        }
    }
    removeHostingPlace(hostingPlace) {
        throw new Error("Not yet implemented.");
    }
    getOrganizations(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:isTemplateSaleSessionOf");
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
//# sourceMappingURL=TemplateSaleSession.js.map