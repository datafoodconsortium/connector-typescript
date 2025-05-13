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
const ORDER_LINE_SEM_TYPE = "dfc-b:OrderLine";
export default class OrderLine extends SemanticObject {
    constructor(parameters) {
        const type = ORDER_LINE_SEM_TYPE;
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
        if (parameters.quantity || parameters.quantity === 0) {
            this.setQuantity(parameters.quantity);
        }
        if (parameters.price) {
            this.setPrice(parameters.price);
        }
        if (parameters.offer) {
            this.setOffer(parameters.offer);
        }
        if (parameters.order) {
            this.setOrder(parameters.order);
        }
    }
    getPrice() {
        const blankNode = this.getSemanticPropertyAnonymous("dfc-b:hasPrice");
        return this.connector.getDefaultFactory().createFromRdfDataset(blankNode);
    }
    getDescription() {
        return this.getSemanticProperty("dfc-b:description");
    }
    setPrice(price) {
        this.setSemanticPropertyAnonymous("dfc-b:hasPrice", price);
    }
    setOffer(offer) {
        this.setSemanticPropertyReference("dfc-b:concerns", offer);
        this.connector.store(offer);
    }
    getOffer(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:concerns");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setOrder(order) {
        this.setSemanticPropertyReference("dfc-b:partOf", order);
        this.connector.store(order);
    }
    setDescription(description) {
        this.setSemanticPropertyLiteral("dfc-b:description", description);
    }
    setQuantity(quantity) {
        this.setSemanticPropertyLiteral("dfc-b:quantity", quantity);
    }
    getQuantity() {
        return Number(this.getSemanticProperty("dfc-b:quantity"));
    }
    getOrder(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:partOf");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
}
//# sourceMappingURL=OrderLine.js.map