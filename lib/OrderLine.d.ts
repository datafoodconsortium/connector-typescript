import IPrice from "./IPrice.js";
import IOrder from "./IOrder.js";
import IOffer from "./IOffer.js";
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
    getDescription(): string | undefined;
    setPrice(price: IPrice): void;
    setOffer(offer: IOffer): void;
    getOffer(options?: IGetterOptions): Promise<IOffer | undefined>;
    setOrder(order: IOrder): void;
    setDescription(description: string): void;
    setQuantity(quantity: number): void;
    getQuantity(): number | undefined;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
}
//# sourceMappingURL=OrderLine.d.ts.map