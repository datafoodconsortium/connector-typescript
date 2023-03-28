import IPrice from "./IPrice.js";
import IOffer from "./IOffer.js";
import IOrderLine from "./IOrderLine.js";
import IOrder from "./IOrder.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class OrderLine extends SemanticObject implements IOrderLine {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: number;
        price?: IPrice;
        offer?: IOffer;
        order?: IOrder;
        doNotStore?: boolean;
    });
    setOffer(offer: IOffer): void;
    setQuantity(quantity: number): void;
    getPrice(options?: IGetterOptions): Promise<IPrice | undefined>;
    setOrder(order: IOrder): void;
    getOffer(options?: IGetterOptions): Promise<IOffer | undefined>;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    getQuantity(): number;
    setPrice(price: IPrice): void;
    setDescription(description: string): void;
    getDescription(): string;
}
//# sourceMappingURL=OrderLine.d.ts.map