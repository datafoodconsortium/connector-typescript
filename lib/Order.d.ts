import IOrder from "./IOrder.js";
import ISaleSession from "./ISaleSession.js";
import IOrderLine from "./IOrderLine.js";
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
        doNotStore?: boolean;
    });
    setDate(date: string): void;
    getNumber(): string;
    getDate(): string;
    addLine(line: IOrderLine): void;
    getClient(options?: IGetterOptions): Promise<IAgent | undefined>;
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    setClient(client: IAgent): void;
    getLines(options?: IGetterOptions): Promise<Array<IOrderLine>>;
    setNumber(number: string): void;
    setSaleSession(saleSession: ISaleSession): void;
}
//# sourceMappingURL=Order.d.ts.map