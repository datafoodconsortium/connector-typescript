import ISaleSession from "./ISaleSession.js";
import IAgent from "./IAgent.js";
import IOrderLine from "./IOrderLine.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IOrder extends Semanticable {
    getNumber(): string;
    getDate(): string;
    getSaleSession(): Promise<ISaleSession | undefined>;
    getClient(): Promise<IAgent | undefined>;
    getLines(): Promise<Array<IOrderLine>>;
    setNumber(number: string): void;
    setDate(date: string): void;
    setSaleSession(saleSession: ISaleSession): void;
    setClient(client: IAgent): void;
    addLine(line: IOrderLine): void;
}
//# sourceMappingURL=IOrder.d.ts.map