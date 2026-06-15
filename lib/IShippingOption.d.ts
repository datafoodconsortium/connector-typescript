import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import IQuantity from "./IQuantity.js";
import Ellapsable from "./Ellapsable.js";
import ISaleSession from "./ISaleSession.js";
import IOrder from "./IOrder.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IShippingOption extends Semanticable, Nameable, Describable, Ellapsable {
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