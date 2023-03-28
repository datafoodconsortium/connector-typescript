import IOffer from "./IOffer.js";
import ICustomerCategory from "./ICustomerCategory.js";
import IPrice from "./IPrice.js";
import ICatalogItem from "./ICatalogItem.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Offer extends SemanticObject implements IOffer {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        offeredItem?: ICatalogItem;
        offeredTo?: ICustomerCategory;
        price?: IPrice;
        stockLimitation?: number;
        doNotStore?: boolean;
    });
    setPrice(price: IPrice): void;
    getPrice(options?: IGetterOptions): Promise<IPrice | undefined>;
    getOfferedItem(options?: IGetterOptions): Promise<ICatalogItem | undefined>;
    setCustomerCategory(customerCategory: ICustomerCategory): void;
    getCustomerCategory(options?: IGetterOptions): Promise<ICustomerCategory | undefined>;
    setOfferedItem(offeredItem: ICatalogItem): void;
    setStockLimitation(stockLimitation: number): void;
    getStockLimitation(): number;
}
//# sourceMappingURL=Offer.d.ts.map