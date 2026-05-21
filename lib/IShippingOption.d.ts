import IOrder from "./IOrder.js";
import Describable from "./Describable.js";
import ISaleSession from "./ISaleSession.js";
import IQuantity from "./IQuantity.js";
import Ellapsable from "./Ellapsable.js";
import Nameable from "./Nameable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IShippingOption extends Semanticable, Ellapsable, Nameable, Describable {
    getFee(): number | undefined;
    setFee(fee: number): void;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
    getOrder(): Promise<IOrder | undefined>;
    setOrder(order: IOrder): void;
    getSaleSession(): Promise<ISaleSession | undefined>;
    setSaleSession(saleSession: ISaleSession): void;
}
//# sourceMappingURL=IShippingOption.d.ts.map