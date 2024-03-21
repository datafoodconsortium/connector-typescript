import IOrderLine from "./IOrderLine.js";
import ISKOSConcept from "./ISKOSConcept.js";
import ISaleSession from "./ISaleSession.js";
import IAgent from "./IAgent.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IOrder extends Semanticable {
    getNumber(): string | undefined;
    getDate(): string | undefined;
    getSaleSession(): Promise<ISaleSession | undefined>;
    getClient(): Promise<IAgent | undefined>;
    getLines(): Promise<IOrderLine[]>;
    setNumber(number: string): void;
    setDate(date: string): void;
    setSaleSession(saleSession: ISaleSession): void;
    setClient(client: IAgent): void;
    addLine(line: IOrderLine): void;
    getFulfilmentStatus(): Promise<ISKOSConcept | undefined>;
    setFulfilmentStatus(fulfilmentState: ISKOSConcept): void;
    getOrderStatus(): Promise<ISKOSConcept | undefined>;
    setOrderStatus(orderState: ISKOSConcept): void;
    getPaymentStatus(): Promise<ISKOSConcept | undefined>;
    setPaymentStatus(paymentState: ISKOSConcept): void;
}
//# sourceMappingURL=IOrder.d.ts.map