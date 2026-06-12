import IOrder from "./IOrder.js";
import ISaleSession from "./ISaleSession.js";
import IDeliveryOption from "./IDeliveryOption.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import ShippingOption from "./ShippingOption.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class DeliveryOption extends ShippingOption implements IDeliveryOption {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        fee?: number;
        quantity?: IQuantity;
        order?: IOrder;
        saleSession?: ISaleSession;
        deliveredPlace?: IPhysicalPlace;
        deliveryConstraint?: string;
        accessibilityInformation?: string;
        beginDate?: string;
        endDate?: string;
        doNotStore?: boolean;
    });
    setAccessibilityInformation(accessibilityInformation: string): void;
    setDeliveredPlace(deliveredPlace: IPhysicalPlace): void;
    setDeliveryConstraint(deliveryConstraint: string): void;
    getDeliveryConstraint(): string | undefined;
    getDeliveredPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    getAccessibilityInformation(): string | undefined;
}
//# sourceMappingURL=DeliveryOption.d.ts.map