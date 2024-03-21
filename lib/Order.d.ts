import IOrderLine from "./IOrderLine.js";
import ISKOSConcept from "./ISKOSConcept.js";
import ISaleSession from "./ISaleSession.js";
import IOrder from "./IOrder.js";
import IAgent from "./IAgent.js";
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
        fulfilmentStatus?: ISKOSConcept;
        orderStatus?: ISKOSConcept;
        paymentStatus?: ISKOSConcept;
        doNotStore?: boolean;
    });
    setPaymentStatus(paymentState: ISKOSConcept): void;
    getFulfilmentStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setDate(date: string): void;
    getDate(): string | undefined;
    getNumber(): string | undefined;
    getOrderStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getPaymentStatus(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setFulfilmentStatus(fulfilmentState: ISKOSConcept): void;
    getClient(options?: IGetterOptions): Promise<IAgent | undefined>;
    setSaleSession(saleSession: ISaleSession): void;
    setClient(client: IAgent): void;
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    addLine(line: IOrderLine): void;
    getLines(options?: IGetterOptions): Promise<IOrderLine[]>;
    setNumber(number: string): void;
    setOrderStatus(orderState: ISKOSConcept): void;
}
//# sourceMappingURL=Order.d.ts.map