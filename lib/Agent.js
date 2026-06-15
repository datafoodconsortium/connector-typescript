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
export default class Agent extends SemanticObject {
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
        if (parameters.localizations) {
            parameters.localizations.forEach(e => this.addLocalization(e));
        }
        if (parameters.phoneNumbers) {
            parameters.phoneNumbers.forEach(e => this.addPhoneNumber(e));
        }
        if (parameters.emails) {
            parameters.emails.forEach(e => this.addEmailAddress(e));
        }
        if (parameters.websites) {
            parameters.websites.forEach(e => this.addWebsite(e));
        }
        if (parameters.socialMedias) {
            parameters.socialMedias.forEach(e => this.addSocialMedia(e));
        }
        if (parameters.logo) {
            this.setLogo(parameters.logo);
        }
        if (parameters.customerCategoriesMembership) {
            parameters.customerCategoriesMembership.forEach(e => this.addCustomerCategory(e));
        }
    }
    removeLocalization(localization) {
        throw new Error("Not yet implemented.");
    }
    setLogo(logo) {
        this.setSemanticPropertyLiteral("dfc-b:logo", logo);
    }
    getLocalizations(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasAddress");
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
    addEmailAddress(emailAddress) {
        this.addSemanticPropertyLiteral("dfc-b:email", emailAddress);
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
    getLogo() {
        return this.getSemanticProperty("dfc-b:logo");
    }
    setCustomerCategories(customerCategories) {
        this.getSemanticPropertyAll("dfc-b:isMemberOf").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        customerCategories.forEach((agent) => {
            this.addSemanticPropertyReference("dfc-b:isMemberOf", agent, true);
            this.connector.store(agent);
        });
    }
    getSocialMedias(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasSocialMedia");
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
    setWebsites(emailAddresses) {
        this.setSemanticPropertyLiteralAll("dfc-b:websitePage", emailAddresses);
    }
    addSocialMedia(socialMedia) {
        if (socialMedia.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasSocialMedia", socialMedia);
        }
        else {
            this.connector.store(socialMedia);
            this.addSemanticPropertyReference("dfc-b:hasSocialMedia", socialMedia);
        }
    }
    setPhoneNumbers(phoneNumbers) {
        this.getSemanticPropertyAll("dfc-b:hasPhoneNumber").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        phoneNumbers.forEach((agent) => {
            this.addSemanticPropertyReference("dfc-b:hasPhoneNumber", agent, true);
            this.connector.store(agent);
        });
    }
    setLocalizations(localizations) {
        this.getSemanticPropertyAll("dfc-b:hasAddress").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        localizations.forEach((agent) => {
            this.addSemanticPropertyReference("dfc-b:hasAddress", agent, true);
            this.connector.store(agent);
        });
    }
    getCustomerCategories(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:isMemberOf");
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
    getEmails() {
        return this.getSemanticPropertyAll("dfc-b:email");
    }
    removeSocialMedia(socialMedia) {
        throw new Error("Not yet implemented.");
    }
    removeCustomerCategory(customerCategory) {
        throw new Error("Not yet implemented.");
    }
    addLocalization(localization) {
        if (localization.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasAddress", localization);
        }
        else {
            this.connector.store(localization);
            this.addSemanticPropertyReference("dfc-b:hasAddress", localization);
        }
    }
    addWebsite(website) {
        this.addSemanticPropertyLiteral("dfc-b:websitePage", website);
    }
    setEmails(emailAddresses) {
        this.setSemanticPropertyLiteralAll("dfc-b:email", emailAddresses);
    }
    setSocialMedias(socialMedias) {
        this.getSemanticPropertyAll("dfc-b:hasSocialMedia").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        socialMedias.forEach((agent) => {
            this.addSemanticPropertyReference("dfc-b:hasSocialMedia", agent, true);
            this.connector.store(agent);
        });
    }
    removePhoneNumber(phoneNumber) {
        throw new Error("Not yet implemented.");
    }
    removeWebsite(website) {
        throw new Error("Not yet implemented.");
    }
    removeEmailAddress(emailAddress) {
        throw new Error("Not yet implemented.");
    }
    addCustomerCategory(customerCategory) {
        if (customerCategory.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:isMemberOf", customerCategory);
        }
        else {
            this.connector.store(customerCategory);
            this.addSemanticPropertyReference("dfc-b:isMemberOf", customerCategory);
        }
    }
    getPhoneNumbers(options) {
        var _a, e_4, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasPhoneNumber");
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
    getWebsites() {
        return this.getSemanticPropertyAll("dfc-b:websitePage");
    }
}
//# sourceMappingURL=Agent.js.map