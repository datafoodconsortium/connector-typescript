import IQuantity from "./IQuantity.js";
import IPickupOption from "./IPickupOption.js";
import ShippingOption from "./ShippingOption.js";
import ISaleSession from "./ISaleSession.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IOrder from "./IOrder.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PickupOption extends ShippingOption implements IPickupOption {
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
        pickupPlace?: IPhysicalPlace;
        beginDate?: string;
        endDate?: string;
        doNotStore?: boolean;
    });
    getPickedUpPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    setPickedUpPlace(pickedUpPlace: IPhysicalPlace): void;
}
//# sourceMappingURL=PickupOption.d.ts.map