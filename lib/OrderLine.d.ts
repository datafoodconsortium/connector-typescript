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
    getQuantity(): number | undefined;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    setPrice(price: IPrice): void;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    getOffer(options?: IGetterOptions): Promise<IOffer | undefined>;
    getPrice(): IPrice | undefined;
    setOffer(offer: IOffer): void;
    setQuantity(quantity: number): void;
    setOrder(order: IOrder): void;
}
//# sourceMappingURL=OrderLine.d.ts.map