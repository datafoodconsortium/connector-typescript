import IQuantity from "./IQuantity.js";
import ShippingOption from "./ShippingOption.js";
import ISaleSession from "./ISaleSession.js";
import IDeliveryOption from "./IDeliveryOption.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IOrder from "./IOrder.js";
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
    setDeliveryConstraint(deliveryConstraint: string): void;
    getDeliveryConstraint(): string | undefined;
    setAccessibilityInformation(accessibilityInformation: string): void;
    setDeliveredPlace(deliveredPlace: IPhysicalPlace): void;
    getDeliveredPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    getAccessibilityInformation(): string | undefined;
}
//# sourceMappingURL=DeliveryOption.d.ts.map