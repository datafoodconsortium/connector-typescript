import IShippingOption from "./IShippingOption.js";
import IQuantity from "./IQuantity.js";
import ISaleSession from "./ISaleSession.js";
import IOrder from "./IOrder.js";
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
    getDescription(): string | undefined;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    setBeginDate(beginDate: string): void;
    getFee(): number | undefined;
    setFee(fee: number): void;
    setEndDate(endDate: string): void;
    setOrder(order: IOrder): void;
    getName(): string | undefined;
    setSaleSession(saleSession: ISaleSession): void;
    setDescription(description: string): void;
    setName(name: string): void;
    getBeginDate(): string | undefined;
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    getEndDate(): string | undefined;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
}
//# sourceMappingURL=ShippingOption.d.ts.map