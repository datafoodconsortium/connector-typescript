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
const CERTIFICATION_SEM_TYPE = "dfc-b:Certfication";
export default class Certification extends SemanticObject {
    constructor(parameters) {
        const type = CERTIFICATION_SEM_TYPE;
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
        if (parameters.certificationReferences) {
            parameters.certificationReferences.forEach(e => this.addCertificationReference(e));
        }
        if (parameters.certificationScores) {
            parameters.certificationScores.forEach(e => this.addCertificationScore(e));
        }
        if (parameters.operatorIds) {
            parameters.operatorIds.forEach(e => this.addOperatorId(e));
        }
        if (parameters.certifiedOrganizations) {
            parameters.certifiedOrganizations.forEach(e => this.addCertifiedOrganization(e));
        }
        if (parameters.name) {
            this.setName(parameters.name);
        }
        if (parameters.description) {
            this.setDescription(parameters.description);
        }
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:hasDescription");
    }
    setOperatorIds(operatorIds) {
        this.setSemanticPropertyLiteralAll("dfc-b:operatorId", operatorIds);
    }
    getCertificationReferences() {
        return this.getSemanticPropertyAll("dfc-b:certiferReference");
    }
    setCertificationReferences(certificationReferences) {
        this.setSemanticPropertyLiteralAll("dfc-b:certiferReference", certificationReferences);
    }
    setCertificationScores(certificationReferences) {
        this.setSemanticPropertyLiteralAll("dfc-b:certificationScore", certificationReferences);
    }
    getOpereratorIds() {
        return this.getSemanticPropertyAll("dfc-b:operatorId");
    }
    addCertificationReference(certificationReference) {
        this.addSemanticPropertyLiteral("dfc-b:certiferReference", certificationReference);
    }
    getCertifiedOrganizations(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:certifies");
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
    removeOperatorId(operatorId) {
        throw new Error("Not yet implemented.");
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    getCertificationScores() {
        return this.getSemanticPropertyAll("dfc-b:certificationScore");
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:hasDescription", description);
    }
    removeCertifiedOrganization(certifiedOrganization) {
        throw new Error("Not yet implemented.");
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    removeCertificationReference(certificationReference) {
        throw new Error("Not yet implemented.");
    }
    addCertificationScore(certificationReference) {
        this.addSemanticPropertyLiteral("dfc-b:certificationScore", certificationReference);
    }
    removeCertificationScore(certificationReference) {
        throw new Error("Not yet implemented.");
    }
    addCertifiedOrganization(certifiedOrganization) {
        if (certifiedOrganization.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:certifies", certifiedOrganization);
        }
        else {
            this.connector.store(certifiedOrganization);
            this.addSemanticPropertyReference("dfc-b:certifies", certifiedOrganization);
        }
    }
    setCertifiedOrganizations(certifiedOrganizations) {
        this.getSemanticPropertyAll("dfc-b:certifies").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        certifiedOrganizations.forEach((certification) => {
            this.addSemanticPropertyReference("dfc-b:certifies", certification, true);
            this.connector.store(certification);
        });
    }
    addOperatorId(operatorId) {
        this.addSemanticPropertyLiteral("dfc-b:operatorId", operatorId);
    }
}
//# sourceMappingURL=Certification.js.map