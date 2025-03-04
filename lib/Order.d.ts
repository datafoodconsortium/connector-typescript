import ISKOSConcept from "./ISKOSConcept.js";
import IAgent from "./IAgent.js";
import ISaleSession from "./ISaleSession.js";
import IOrder from "./IOrder.js";
import IOrderLine from "./IOrderLine.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Order extends SemanticObject implements IOrder {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        number?: string;
        date?: string;
        saleSession?: ISaleSession;
        client?: IAgent;
        lines?: IOrderLine[];
        soldBy?: IAgent;
        fulfilmentStatus?: ISKOSConcept;
        orderStatus?: ISKOSConcept;
        paymentStatus?: ISKOSConcept;
        doNotStore?: boolean;
    });
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    setNumber(number: string): void;
    setSoldBy(soldBy: IAgent): void;
    getNumber(): string | undefined;
    addLine(line: IOrderLine): void;
    getSoldBy(options?: IGetterOptions): Promise<IAgent | undefined>;
    setDate(date: string): void;
    getFulfilmentStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setSaleSession(saleSession: ISaleSession): void;
    getClient(options?: IGetterOptions): Promise<IAgent | undefined>;
    setPaymentStatus(paymentState: ISKOSConcept): void;
    setFulfilmentStatus(fulfilmentState: ISKOSConcept): void;
    getOrderStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setClient(client: IAgent): void;
    getDate(): string | undefined;
    setOrderStatus(orderState: ISKOSConcept): void;
    getLines(options?: IGetterOptions): Promise<IOrderLine[]>;
    getPaymentStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
}
//# sourceMappingURL=Order.d.ts.map