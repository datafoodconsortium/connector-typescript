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
const PERSON_SEM_TYPE = "dfc-b:Person";
export default class Person extends Agent {
    constructor(parameters) {
        const type = PERSON_SEM_TYPE;
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
        if (parameters.firstName) {
            this.setFirstName(parameters.firstName);
        }
        if (parameters.lastName) {
            this.setLastName(parameters.lastName);
        }
        if (parameters.organizations) {
            parameters.organizations.forEach(e => this.affiliateTo(e));
        }
    }
    getFirstName() {
        return this.getSemanticProperty("dfc-b:firstName");
    }
    getLastName() {
        return this.getSemanticProperty("dfc-b:familyName");
    }
    setLastName(lastName) {
        this.setSemanticPropertyLiteral("dfc-b:familyName", lastName);
    }
    leaveAffiliatedOrganization(organization) {
        throw new Error("Not yet implemented.");
    }
    setFirstName(firstName) {
        this.setSemanticPropertyLiteral("dfc-b:firstName", firstName);
    }
    affiliateTo(organization) {
        if (organization.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:affiliates", organization);
        }
        else {
            this.connector.store(organization);
            this.addSemanticPropertyReference("dfc-b:affiliates", organization);
        }
    }
    getAffiliatedOrganizations(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:affiliates");
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
}
//# sourceMappingURL=Person.js.map