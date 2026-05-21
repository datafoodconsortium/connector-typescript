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
    setQuantity(quantity: IQuantity): void;
    getFee(): number | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    setFee(fee: number): void;
    setSaleSession(saleSession: ISaleSession): void;
    getEndDate(): string | undefined;
    getName(): string | undefined;
    setOrder(order: IOrder): void;
    setBeginDate(beginDate: string): void;
    getQuantity(): IQuantity | undefined;
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    setName(name: string): void;
    getBeginDate(): string | undefined;
    setEndDate(endDate: string): void;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
}
//# sourceMappingURL=ShippingOption.d.ts.map