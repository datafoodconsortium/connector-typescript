import IRoute from "./IRoute.js";
import IDeliveryStep from "./IDeliveryStep.js";
import Step from "./Step.js";
import IShipment from "./IShipment.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class DeliveryStep extends Step implements IDeliveryStep {
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
//# sourceMappingURL=DeliveryStep.d.ts.map