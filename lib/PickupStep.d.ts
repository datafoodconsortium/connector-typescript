import Step from "./Step.js";
import IPickUpStep from "./IPickUpStep.js";
import IShipment from "./IShipment.js";
import IRoute from "./IRoute.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class PickupStep extends Step implements IPickUpStep {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        routes?: IRoute[];
        deliveredShipments?: IShipment[];
        pickedUpShipments?: IShipment[];
        duration?: string;
        arrivalDate?: string;
        doNotStore?: boolean;
    });
}
//# sourceMappingURL=PickupStep.d.ts.map