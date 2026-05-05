import IPrice from "./IPrice.js";
import IOrderLine from "./IOrderLine.js";
import IOrder from "./IOrder.js";
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
    getQuantity(): number | undefined;
    setOffer(offer: IOffer): void;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    getOffer(options?: IGetterOptions): Promise<IOffer | undefined>;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    setQuantity(quantity: number): void;
    setPrice(price: IPrice): void;
    setOrder(order: IOrder): void;
    getPrice(): IPrice | undefined;
}
//# sourceMappingURL=OrderLine.d.ts.map