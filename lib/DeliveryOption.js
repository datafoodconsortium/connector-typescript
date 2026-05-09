var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ShippingOption from "./ShippingOption.js";
const DELIVERY_OPTION_SEM_TYPE = "dfc-b:DeliveryOption";
export default class DeliveryOption extends ShippingOption {
    constructor(parameters) {
        const type = DELIVERY_OPTION_SEM_TYPE;
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
                name: parameters.name,
                description: parameters.description,
                fee: parameters.fee,
                quantity: parameters.quantity,
                order: parameters.order,
                saleSession: parameters.saleSession,
                beginDate: parameters.beginDate,
                endDate: parameters.endDate
            });
        }
        if (!parameters.doNotStore) {
            this.connector.store(this);
        }
        if (parameters.deliveredPlace) {
            this.setDeliveredPlace(parameters.deliveredPlace);
        }
        if (parameters.deliveryConstraint) {
            this.setDeliveryConstraint(parameters.deliveryConstraint);
        }
        if (parameters.accessibilityInformation) {
            this.setAccessibilityInformation(parameters.accessibilityInformation);
        }
    }
    setAccessibilityInformation(accessibilityInformation) {
        this.setSemanticPropertyLiteral("dfc-b:accessibilityInfo", accessibilityInformation);
    }
    getDeliveredPlace(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            const semanticId = this.getSemanticProperty("dfc-b:deliveredAt");
            if (semanticId) {
                const semanticObject = yield this.connector.fetch(semanticId, options);
                if (semanticObject)
                    result = semanticObject;
            }
            return result;
        });
    }
    setDeliveryConstraint(deliveryConstraint) {
        this.setSemanticPropertyLiteral("dfc-b:deliveryConstraint", deliveryConstraint);
    }
    getAccessibilityInformation() {
        return this.getSemanticProperty("dfc-b:accessibilityInfo");
    }
    setDeliveredPlace(deliveredPlace) {
        this.setSemanticPropertyReference("dfc-b:deliveredAt", deliveredPlace);
        this.connector.store(deliveredPlace);
    }
    getDeliveryConstraint() {
        return this.getSemanticProperty("dfc-b:deliveryConstraint");
    }
}
//# sourceMappingURL=DeliveryOption.js.map