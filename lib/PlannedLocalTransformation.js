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
const PLANNED_LOCAL_TRANSFORMATION_SEM_TYPE = "dfc-b:AsPlannedLocalTransformation";
export default class PlannedLocalTransformation extends SemanticObject {
    constructor(parameters) {
        const type = PLANNED_LOCAL_TRANSFORMATION_SEM_TYPE;
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
        if (parameters.transformationType) {
            this.setTransformationType(parameters.transformationType);
        }
        if (parameters.cost || parameters.cost === 0) {
            this.setCost(parameters.cost);
        }
        if (parameters.startDate) {
            this.setBeginDate(parameters.startDate);
        }
        if (parameters.endDate) {
            this.setEndDate(parameters.endDate);
        }
        if (parameters.consumptionFlows) {
            parameters.consumptionFlows.forEach(e => this.addPlannedLocalConsumptionFlow(e));
        }
        if (parameters.productionFlows) {
            parameters.productionFlows.forEach(e => this.addPlannedLocalProductionFlow(e));
        }
    }
    getBeginDate() {
        return this.getSemanticProperty("dfc-b:startDate");
    }
    setCost(cost) {
        this.setSemanticPropertyLiteral("dfc-b:cost", cost);
    }
    setEndDate(endDate) {
        this.setSemanticPropertyLiteral("dfc-b:endDate", endDate);
    }
    setPlannedLocalProductionFlows(plannedLocalProductionFlows) {
        this.getSemanticPropertyAll("dfc-b:hasOutput").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        plannedLocalProductionFlows.forEach((plannedLocalTransformation) => {
            this.addSemanticPropertyReference("dfc-b:hasOutput", plannedLocalTransformation, true);
            this.connector.store(plannedLocalTransformation);
        });
    }
    getCost() {
        return Number(this.getSemanticProperty("dfc-b:cost"));
    }
    getPlannedLocalConsumptionFlows(options) {
        var _a, e_1, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasInput");
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
    setPlannedLocalConsumptionFlows(plannedLocalConsumptionFlows) {
        this.getSemanticPropertyAll("dfc-b:hasInput").forEach((prop) => {
            this.connector.removeFromStore(prop);
        });
        plannedLocalConsumptionFlows.forEach((plannedLocalTransformation) => {
            this.addSemanticPropertyReference("dfc-b:hasInput", plannedLocalTransformation, true);
            this.connector.store(plannedLocalTransformation);
        });
    }
    addPlannedLocalConsumptionFlow(plannedLocalConsumptionFlow) {
        if (plannedLocalConsumptionFlow.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasInput", plannedLocalConsumptionFlow);
        }
        else {
            this.connector.store(plannedLocalConsumptionFlow);
            this.addSemanticPropertyReference("dfc-b:hasInput", plannedLocalConsumptionFlow);
        }
    }
    setTransformationType(transformationType) {
        this.setSemanticPropertyReference("dfc-b:hasTransformationType", transformationType);
        this.connector.store(transformationType);
    }
    addPlannedLocalProductionFlow(plannedLocalProductionFlow) {
        if (plannedLocalProductionFlow.isSemanticObjectAnonymous()) {
            this.addSemanticPropertyAnonymous("dfc-b:hasOutput", plannedLocalProductionFlow);
        }
        else {
            this.connector.store(plannedLocalProductionFlow);
            this.addSemanticPropertyReference("dfc-b:hasOutput", plannedLocalProductionFlow);
        }
    }
    getEndDate() {
        return this.getSemanticProperty("dfc-b:endDate");
    }
    removePlannedLocalProductionFlow(plannedLocalProductionFlow) {
        throw new Error("Not yet implemented.");
    }
    getPlannedLocalProductionFlows(options) {
        var _a, e_2, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const results = new Array();
            const properties = this.getSemanticPropertyAll("dfc-b:hasOutput");
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
    getTransformationType(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:hasTransformationType");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setBeginDate(beginDate) {
        this.setSemanticPropertyLiteral("dfc-b:startDate", beginDate);
    }
    removePlannedLocalConsumptionFlow(plannedLocalConsumptionFlow) {
        throw new Error("Not yet implemented.");
    }
}
//# sourceMappingURL=PlannedLocalTransformation.js.map