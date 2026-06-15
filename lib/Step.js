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
export default class Step extends SemanticObject {
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
        if (parameters.routes) {
            parameters.routes.forEach(e => this.addRoute(e));
        }
        if (parameters.deliveredShipments) {
            parameters.deliveredShipments.forEach(e => this.addDeliveredShipment(e));
        }
        if (parameters.pickedUpShipments) {
            parameters.pickedUpShipments.forEach(e => this.addPickedUpShipment(e));
        }
        if (parameters.duration) {
            this.setDuration(parameters.duration);
        }
        if (parameters.arrivalDate) {
            this.setArrivalDate(parameters.arrivalDate);
        }
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    setDuration(duration) {
        this.setSemanticPropertyLiteral("dfc-b:duration", duration);
    }
    addRoute(route) {
        if (route.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:isStepOf", route);
        }
        else {
            this.connector.store(route);
            this.addSemanticPropertyReference("dfc-b:isStepOf", route);
        }
    }
    setDeliveredShipments(deliveredShipments) {
        this.getSemanticPropertyAll("dfc-b:delivery").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        deliveredShipments.forEach((step) => {
            this.addSemanticPropertyReference("dfc-b:delivery", step, true);
            this.connector.store(step);
        });
    }
    getPickedUpShipments(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:pickUp");
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
    setPickedUpShipments(pickedUpShipments) {
        this.getSemanticPropertyAll("dfc-b:pickUp").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        pickedUpShipments.forEach((step) => {
            this.addSemanticPropertyReference("dfc-b:pickUp", step, true);
            this.connector.store(step);
        });
    }
    removeRoute(route) {
        throw new Error("Not yet implemented.");
    }
    addDeliveredShipment(deliveredShipment) {
        if (deliveredShipment.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:delivery", deliveredShipment);
        }
        else {
            this.connector.store(deliveredShipment);
            this.addSemanticPropertyReference("dfc-b:delivery", deliveredShipment);
        }
    }
    addPickedUpShipment(pickedUpShipment) {
        if (pickedUpShipment.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:pickUp", pickedUpShipment);
        }
        else {
            this.connector.store(pickedUpShipment);
            this.addSemanticPropertyReference("dfc-b:pickUp", pickedUpShipment);
        }
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    removePickedUpShipment(pickedUpShipment) {
        throw new Error("Not yet implemented.");
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setArrivalDate(arrivalDate) {
        this.setSemanticPropertyLiteral("dfc-b:arrivalDate", arrivalDate);
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getRoutes(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:isStepOf");
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
    getDuration() {
        return this.getSemanticProperty("dfc-b:duration");
    }
    getDeliveredShipments(options) {
        var _a, e_3, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:delivery");
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
    removeDeliveredShipment(deliveredShipment) {
        throw new Error("Not yet implemented.");
    }
    getArrivalDate() {
        return this.getSemanticProperty("dfc-b:arrivalDate");
    }
    setRoutes(routes) {
        this.getSemanticPropertyAll("dfc-b:isStepOf").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        routes.forEach((step) => {
            this.addSemanticPropertyReference("dfc-b:isStepOf", step, true);
            this.connector.store(step);
        });
    }
}
//# sourceMappingURL=Step.js.map