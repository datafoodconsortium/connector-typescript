var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SemanticObject } from "@virtual-assembly/semantizer";
const VEVENT_SEM_TYPE = "http://www.w3.org/2002/12/cal/icaltzd#Vevent";
export default class Vevent extends SemanticObject {
    getStart() {
        return this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#dtstart");
    }
    setStart(start) {
        this.setSemanticPropertyLiteral("http://www.w3.org/2002/12/cal/icaltzd#dtstart", start);
    }
    getEnd() {
        return this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#dtend");
    }
    setEnd(end) {
        this.setSemanticPropertyLiteral("http://www.w3.org/2002/12/cal/icaltzd#dtend", end);
    }
    getRule(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("http://www.w3.org/2002/12/cal/icaltzd#rrule");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setRule(rule) {
        this.setSemanticPropertyReference("http://www.w3.org/2002/12/cal/icaltzd#rrule", rule);
        this.connector.store(rule);
    }
    constructor(parameters) {
        const type = VEVENT_SEM_TYPE;
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
        if (parameters.start) {
            this.setStart(parameters.start);
        }
        if (parameters.end) {
            this.setEnd(parameters.end);
        }
        if (parameters.rule) {
            this.setRule(parameters.rule);
        }
    }
}
//# sourceMappingURL=Vevent.js.map