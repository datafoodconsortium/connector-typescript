import IDeliveryOption from "./IDeliveryOption.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import ISaleSession from "./ISaleSession.js";
import IOrder from "./IOrder.js";
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
    getDeliveredPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    setDeliveryConstraint(deliveryConstraint: string): void;
    getAccessibilityInformation(): string | undefined;
    setDeliveredPlace(deliveredPlace: IPhysicalPlace): void;
    getDeliveryConstraint(): string | undefined;
}
//# sourceMappingURL=DeliveryOption.d.ts.map