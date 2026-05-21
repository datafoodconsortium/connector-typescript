import IOrder from "./IOrder.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IDeliveryOption from "./IDeliveryOption.js";
import ISaleSession from "./ISaleSession.js";
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
    getDeliveryConstraint(): string | undefined;
    setDeliveredPlace(deliveredPlace: IPhysicalPlace): void;
    getDeliveredPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    setDeliveryConstraint(deliveryConstraint: string): void;
    getAccessibilityInformation(): string | undefined;
    setAccessibilityInformation(accessibilityInformation: string): void;
}
//# sourceMappingURL=DeliveryOption.d.ts.map