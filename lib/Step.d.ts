import IRoute from "./IRoute.js";
import IStep from "./IStep.js";
import IShipment from "./IShipment.js";
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
    getDescription(): string | undefined;
    removeRoute(route: IRoute): void;
    getArrivalDate(): string | undefined;
    addRoute(route: IRoute): void;
    addDeliveredShipment(deliveredShipment: IShipment): void;
    getRoutes(options?: IGetterOptions): Promise<IRoute[]>;
    addPickedUpShipment(pickedUpShipment: IShipment): void;
    getName(): string | undefined;
    setDescription(description: string): void;
    setName(name: string): void;
    getDeliveredShipments(options?: IGetterOptions): Promise<IShipment[]>;
    setArrivalDate(arrivalDate: string): void;
    getDuration(): string | undefined;
    removeDeliveredShipment(deliveredShipment: IShipment): void;
    setPickedUpShipments(pickedUpShipments: IShipment[]): void;
    removePickedUpShipment(pickedUpShipment: IShipment): void;
    setRoutes(routes: IRoute[]): void;
    setDeliveredShipments(deliveredShipments: IShipment[]): void;
    setDuration(duration: string): void;
    getPickedUpShipments(options?: IGetterOptions): Promise<IShipment[]>;
}
//# sourceMappingURL=Step.d.ts.map