import IStep from "./IStep.js";
import IShipment from "./IShipment.js";
import IRoute from "./IRoute.js";
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
    setDuration(duration: string): void;
    addRoute(route: IRoute): void;
    setDeliveredShipments(deliveredShipments: IShipment[]): void;
    getPickedUpShipments(options?: IGetterOptions): Promise<IShipment[]>;
    setPickedUpShipments(pickedUpShipments: IShipment[]): void;
    removeRoute(route: IRoute): void;
    addDeliveredShipment(deliveredShipment: IShipment): void;
    addPickedUpShipment(pickedUpShipment: IShipment): void;
    getName(): string | undefined;
    removePickedUpShipment(pickedUpShipment: IShipment): void;
    setDescription(description: string): void;
    setArrivalDate(arrivalDate: string): void;
    setName(name: string): void;
    getRoutes(options?: IGetterOptions): Promise<IRoute[]>;
    getDuration(): string | undefined;
    getDeliveredShipments(options?: IGetterOptions): Promise<IShipment[]>;
    removeDeliveredShipment(deliveredShipment: IShipment): void;
    getArrivalDate(): string | undefined;
    setRoutes(routes: IRoute[]): void;
}
//# sourceMappingURL=Step.d.ts.map