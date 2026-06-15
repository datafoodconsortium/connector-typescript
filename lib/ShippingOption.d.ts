import IOrder from "./IOrder.js";
import IShippingOption from "./IShippingOption.js";
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
    getBeginDate(): string | undefined;
    getDescription(): string | undefined;
    setOrder(order: IOrder): void;
    setFee(fee: number): void;
    setEndDate(endDate: string): void;
    getQuantity(): IQuantity | undefined;
    getName(): string | undefined;
    setDescription(description: string): void;
    setQuantity(quantity: IQuantity): void;
    getEndDate(): string | undefined;
    setName(name: string): void;
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    getFee(): number | undefined;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    setBeginDate(beginDate: string): void;
    setSaleSession(saleSession: ISaleSession): void;
}
//# sourceMappingURL=ShippingOption.d.ts.map