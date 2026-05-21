import IOrder from "./IOrder.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IPickupOption from "./IPickupOption.js";
import ISaleSession from "./ISaleSession.js";
import ShippingOption from "./ShippingOption.js";
import IQuantity from "./IQuantity.js";
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
    setPickedUpPlace(pickedUpPlace: IPhysicalPlace): void;
    getPickedUpPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
}
//# sourceMappingURL=PickupOption.d.ts.map