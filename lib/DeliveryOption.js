var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
 * MIT License
 *
 * Copyright (c) 2023 Maxime Lecoq <maxime@lecoqlibre.fr>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
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
    setDeliveredPlace(deliveredPlace) {
        this.setSemanticPropertyReference("dfc-b:deliveredAt", deliveredPlace);
        this.connector.store(deliveredPlace);
    }
    setDeliveryConstraint(deliveryConstraint) {
        this.setSemanticPropertyLiteral("dfc-b:deliveryConstraint", deliveryConstraint);
    }
    getAccessibilityInformation() {
        return this.getSemanticProperty("dfc-b:accessibilityInfo");
    }
    getDeliveryConstraint() {
        return this.getSemanticProperty("dfc-b:deliveryConstraint");
    }
    setAccessibilityInformation(accessibilityInformation) {
        this.setSemanticPropertyLiteral("dfc-b:accessibilityInfo", accessibilityInformation);
    }
}
//# sourceMappingURL=DeliveryOption.js.map