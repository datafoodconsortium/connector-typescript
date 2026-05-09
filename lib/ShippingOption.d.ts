import IShippingOption from "./IShippingOption.js";
import IOrder from "./IOrder.js";
import ISaleSession from "./ISaleSession.js";
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
    getName(): string | undefined;
    setFee(fee: number): void;
    setEndDate(endDate: string): void;
    getFee(): number | undefined;
    getBeginDate(): string | undefined;
    setName(name: string): void;
    setBeginDate(beginDate: string): void;
    setSaleSession(saleSession: ISaleSession): void;
    getEndDate(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    getQuantity(): IQuantity | undefined;
    setOrder(order: IOrder): void;
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    setQuantity(quantity: IQuantity): void;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
}
//# sourceMappingURL=ShippingOption.d.ts.map