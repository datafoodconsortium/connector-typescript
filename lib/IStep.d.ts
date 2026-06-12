import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import IRoute from "./IRoute.js";
import IShipment from "./IShipment.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IStep extends Semanticable, Describable, Nameable {
    getArrivalDate(): string | undefined;
    setArrivalDate(arrivalDate: string): void;
    getDuration(): string | undefined;
    setDuration(duration: string): void;
    getDeliveredShipments(): Promise<IShipment[]>;
    setDeliveredShipments(deliveredShipments: IShipment[]): void;
    addDeliveredShipment(deliveredShipment: IShipment): void;
    removeDeliveredShipment(deliveredShipment: IShipment): void;
    getPickedUpShipments(): Promise<IShipment[]>;
    setPickedUpShipments(pickedUpShipments: IShipment[]): void;
    addPickedUpShipment(pickedUpShipment: IShipment): void;
    removePickedUpShipment(pickedUpShipment: IShipment): void;
    getRoutes(): Promise<IRoute[]>;
    setRoutes(routes: IRoute[]): void;
    addRoute(route: IRoute): void;
    removeRoute(route: IRoute): void;
}
//# sourceMappingURL=IStep.d.ts.map