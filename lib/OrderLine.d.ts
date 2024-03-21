import IOrderLine from "./IOrderLine.js";
import IOrder from "./IOrder.js";
import IPrice from "./IPrice.js";
import IOffer from "./IOffer.js";
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
    getQuantity(): number | undefined;
    setDescription(description: string): void;
    setOrder(order: IOrder): void;
    getDescription(): string | undefined;
    getPrice(): IPrice | undefined;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    getOffer(options?: IGetterOptions): Promise<IOffer | undefined>;
    setQuantity(quantity: number): void;
    setPrice(price: IPrice): void;
}
//# sourceMappingURL=OrderLine.d.ts.map