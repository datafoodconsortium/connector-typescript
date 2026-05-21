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
export default class ShippingOption extends SemanticObject {
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
        if (parameters.fee || parameters.fee === 0) {
            this.setFee(parameters.fee);
        }
        if (parameters.quantity) {
            this.setQuantity(parameters.quantity);
        }
        if (parameters.order) {
            this.setOrder(parameters.order);
        }
        if (parameters.saleSession) {
            this.setSaleSession(parameters.saleSession);
        }
        if (parameters.beginDate) {
            this.setBeginDate(parameters.beginDate);
        }
        if (parameters.endDate) {
            this.setEndDate(parameters.endDate);
        }
    }
    setQuantity(quantity) {
        this.setSemanticPropertyAnonymous("dfc-b:hasQuantity", quantity);
    }
    getFee() {
        return Number(this.getSemanticProperty("dfc-b:fee"));
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setFee(fee) {
        this.setSemanticPropertyLiteral("dfc-b:fee", fee);
    }
    setSaleSession(saleSession) {
        this.setSemanticPropertyReference("dfc-b:optionOf", saleSession);
        this.connector.store(saleSession);
    }
    getEndDate() {
        return this.getSemanticProperty("dfc-b:endDate");
    }
    getName() {
        return this.getSemanticProperty("dfc-b:name");
    }
    setOrder(order) {
        this.setSemanticPropertyReference("dfc-b:selectedBy", order);
        this.connector.store(order);
    }
    setBeginDate(beginDate) {
        this.setSemanticPropertyLiteral("dfc-b:startDate", beginDate);
    }
    getQuantity() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasQuantity");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
    getSaleSession(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:optionOf");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setName(name) {
        this.setSemanticPropertyLiteral("dfc-b:name", name);
    }
    getBeginDate() {
        return this.getSemanticProperty("dfc-b:startDate");
    }
    setEndDate(endDate) {
        this.setSemanticPropertyLiteral("dfc-b:endDate", endDate);
    }
    getOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:selectedBy");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
}
//# sourceMappingURL=ShippingOption.js.map