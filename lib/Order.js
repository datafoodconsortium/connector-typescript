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
const ORDER_SEM_TYPE = "dfc-b:Order";
export default class Order extends SemanticObject {
    constructor(parameters) {
        const type = ORDER_SEM_TYPE;
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
        if (parameters.number) {
            this.setNumber(parameters.number);
        }
        if (parameters.date) {
            this.setDate(parameters.date);
        }
        if (parameters.saleSession) {
            this.setSaleSession(parameters.saleSession);
        }
        if (parameters.client) {
            this.setClient(parameters.client);
        }
        if (parameters.lines) {
            parameters.lines.forEach(e => this.addLine(e));
        }
        if (parameters.soldBy) {
            this.setSoldBy(parameters.soldBy);
        }
        if (parameters.fulfilmentStatus) {
            this.setFulfilmentStatus(parameters.fulfilmentStatus);
        }
        if (parameters.orderStatus) {
            this.setOrderStatus(parameters.orderStatus);
        }
        if (parameters.paymentStatus) {
            this.setPaymentStatus(parameters.paymentStatus);
        }
    }
    getSaleSession(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:belongsTo");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setNumber(number) {
        this.setSemanticPropertyLiteral("dfc-b:orderNumber", number);
    }
    setSoldBy(soldBy) {
        this.setSemanticPropertyReference("dfc-b:soldBy", soldBy);
        this.connector.store(soldBy);
    }
    getNumber() {
        return this.getSemanticProperty("dfc-b:orderNumber");
    }
    addLine(line) {
        if (line.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasPart", line);
        }
        else {
            this.connector.store(line);
            this.addSemanticPropertyReference("dfc-b:hasPart", line);
        }
    }
    getSoldBy(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:soldBy");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setDate(date) {
        this.setSemanticPropertyLiteral("dfc-b:date", date);
    }
    getFulfilmentStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasFulfilmentStatus");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setSaleSession(saleSession) {
        this.setSemanticPropertyReference("dfc-b:belongsTo", saleSession);
        this.connector.store(saleSession);
    }
    getClient(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:orderedBy");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setPaymentStatus(paymentState) {
        this.setSemanticPropertyReference("dfc-b:hasPaymentStatus", paymentState);
        this.connector.store(paymentState);
    }
    setFulfilmentStatus(fulfilmentState) {
        this.setSemanticPropertyReference("dfc-b:hasFulfilmentStatus", fulfilmentState);
        this.connector.store(fulfilmentState);
    }
    getOrderStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasOrderStatus");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setClient(client) {
        this.setSemanticPropertyReference("dfc-b:orderedBy", client);
        this.connector.store(client);
    }
    getDate() {
        return this.getSemanticProperty("dfc-b:date");
    }
    setOrderStatus(orderState) {
        this.setSemanticPropertyReference("dfc-b:hasOrderStatus", orderState);
        this.connector.store(orderState);
    }
    getLines(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasPart");
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
    getPaymentStatus(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasPaymentStatus");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
}
//# sourceMappingURL=Order.js.map