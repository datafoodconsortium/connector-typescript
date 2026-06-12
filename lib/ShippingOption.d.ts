import ISaleSession from "./ISaleSession.js";
import IOrder from "./IOrder.js";
import IShippingOption from "./IShippingOption.js";
import IQuantity from "./IQuantity.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default abstract class ShippingOption extends SemanticObject implements IShippingOption {
    protected connector: IConnector;
    protected constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        fee?: number;
        quantity?: IQuantity;
        order?: IOrder;
        saleSession?: ISaleSession;
        beginDate?: string;
        endDate?: string;
        doNotStore?: boolean;
    });
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    getName(): string | undefined;
    setSaleSession(saleSession: ISaleSession): void;
    getEndDate(): string | undefined;
    getQuantity(): IQuantity | undefined;
    setFee(fee: number): void;
    setName(name: string): void;
    setBeginDate(beginDate: string): void;
    setQuantity(quantity: IQuantity): void;
    setOrder(order: IOrder): void;
    getFee(): number | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    setEndDate(endDate: string): void;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    getBeginDate(): string | undefined;
}
//# sourceMappingURL=ShippingOption.d.ts.map