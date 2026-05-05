import ISaleSession from "./ISaleSession.js";
import IQuantity from "./IQuantity.js";
import IShippingOption from "./IShippingOption.js";
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
    getSaleSession(options?: IGetterOptions): Promise<ISaleSession | undefined>;
    getDescription(): string | undefined;
    getFee(): number | undefined;
    setBeginDate(beginDate: string): void;
    setSaleSession(saleSession: ISaleSession): void;
    setEndDate(endDate: string): void;
    setFee(fee: number): void;
    getName(): string | undefined;
    setDescription(description: string): void;
    getQuantity(): IQuantity | undefined;
    setName(name: string): void;
    getBeginDate(): string | undefined;
    getOrder(options?: IGetterOptions): Promise<IOrder | undefined>;
    setQuantity(quantity: IQuantity): void;
    getEndDate(): string | undefined;
    setOrder(order: IOrder): void;
}
//# sourceMappingURL=ShippingOption.d.ts.map