import Describable from "./Describable.js";
import IPrice from "./IPrice.js";
import IOrder from "./IOrder.js";
import IOffer from "./IOffer.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IOrderLine extends Semanticable, Describable {
    getQuantity(): number | undefined;
    getPrice(): IPrice | undefined;
    getOffer(): Promise<IOffer | undefined>;
    getOrder(): Promise<IOrder | undefined>;
    setQuantity(quantity: number): void;
    setPrice(price: IPrice): void;
    setOffer(offer: IOffer): void;
    setOrder(order: IOrder): void;
}
//# sourceMappingURL=IOrderLine.d.ts.map