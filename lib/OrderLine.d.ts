import IOrder from "./IOrder.js";
import IOffer from "./IOffer.js";
import IPrice from "./IPrice.js";
import IOrderLine from "./IOrderLine.js";
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
    getPrice(): IPrice | undefined;
    setQuantity(quantity: number): void;
    getDescription(): string | undefined;
    setOffer(offer: IOffer): void;
    setDescription(description: string): void;
    setPrice(price: IPrice): void;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    setOrder(order: IOrder): void;
    getQuantity(): number | undefined;
    getOffer(options?: IGetterOptions): Promise<IOffer | undefined>;
}
//# sourceMappingURL=OrderLine.d.ts.map