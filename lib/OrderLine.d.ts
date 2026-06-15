import IPrice from "./IPrice.js";
import IOrderLine from "./IOrderLine.js";
import IOffer from "./IOffer.js";
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
    getDescription(): string | undefined;
    getPrice(): IPrice | undefined;
    setDescription(description: string): void;
    setOrder(order: IOrder): void;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    setPrice(price: IPrice): void;
    setOffer(offer: IOffer): void;
    getOffer(options?: IGetterOptions): Promise<IOffer | undefined>;
    setQuantity(quantity: number): void;
    getQuantity(): number | undefined;
}
//# sourceMappingURL=OrderLine.d.ts.map