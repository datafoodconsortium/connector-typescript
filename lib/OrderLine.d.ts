import IOffer from "./IOffer.js";
import IPrice from "./IPrice.js";
import IOrder from "./IOrder.js";
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
    getDescription(): string | undefined;
    getOffer(options?: IGetterOptions): Promise<IOffer | undefined>;
    setOrder(order: IOrder): void;
    getQuantity(): number | undefined;
    setDescription(description: string): void;
    setPrice(price: IPrice): void;
    setQuantity(quantity: number): void;
    getPrice(): IPrice | undefined;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    setOffer(offer: IOffer): void;
}
//# sourceMappingURL=OrderLine.d.ts.map