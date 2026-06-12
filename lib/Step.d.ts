import IRoute from "./IRoute.js";
import IShipment from "./IShipment.js";
import IStep from "./IStep.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default abstract class Step extends SemanticObject implements IStep {
    protected connector: IConnector;
    protected constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
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
    getPickedUpShipments(options?: IGetterOptions): Promise<IShipment[]>;
    getName(): string | undefined;
    addPickedUpShipment(pickedUpShipment: IShipment): void;
    getRoutes(options?: IGetterOptions): Promise<IRoute[]>;
    addDeliveredShipment(deliveredShipment: IShipment): void;
    setName(name: string): void;
    addRoute(route: IRoute): void;
    getArrivalDate(): string | undefined;
    setPickedUpShipments(pickedUpShipments: IShipment[]): void;
    setDuration(duration: string): void;
    getDescription(): string | undefined;
    setDeliveredShipments(deliveredShipments: IShipment[]): void;
    getDeliveredShipments(options?: IGetterOptions): Promise<IShipment[]>;
    removeDeliveredShipment(deliveredShipment: IShipment): void;
    setDescription(description: string): void;
    removePickedUpShipment(pickedUpShipment: IShipment): void;
    getDuration(): string | undefined;
    setRoutes(routes: IRoute[]): void;
    removeRoute(route: IRoute): void;
    setArrivalDate(arrivalDate: string): void;
}
//# sourceMappingURL=Step.d.ts.map