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
const OFFER_SEM_TYPE = "dfc-b:Offer";
export default class Offer extends SemanticObject {
    constructor(parameters) {
        const type = OFFER_SEM_TYPE;
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
        if (parameters.offeredItem) {
            this.setOfferedItem(parameters.offeredItem);
        }
        if (parameters.offeredTo) {
            this.setCustomerCategory(parameters.offeredTo);
        }
        if (parameters.price) {
            this.setPrice(parameters.price);
        }
        if (parameters.stockLimitation || parameters.stockLimitation === 0) {
            this.setStockLimitation(parameters.stockLimitation);
        }
    }
    getPrice() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasPrice");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
    setPrice(price) {
        this.setSemanticPropertyAnonymous("dfc-b:hasPrice", price);
    }
    getCustomerCategory(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:offeredTo");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setCustomerCategory(customerCategory) {
        this.setSemanticPropertyReference("dfc-b:offeredTo", customerCategory);
        this.connector.store(customerCategory);
    }
    setStockLimitation(stockLimitation) {
        this.setSemanticPropertyLiteral("dfc-b:stockLimitation", stockLimitation);
    }
    setOfferedItem(offeredItem) {
        this.setSemanticPropertyReference("dfc-b:offeredItem", offeredItem);
        this.connector.store(offeredItem);
    }
    getOfferedItem(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:offeredItem");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    getStockLimitation() {
        return Number(this.getSemanticProperty("dfc-b:stockLimitation"));
    }
}
//# sourceMappingURL=Offer.js.map