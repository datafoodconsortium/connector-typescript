import IPrice from "./IPrice.js";
import IOffer from "./IOffer.js";
import ICatalogItem from "./ICatalogItem.js";
import ICustomerCategory from "./ICustomerCategory.js";
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
    getPrice(): IPrice | undefined;
    setPrice(price: IPrice): void;
    getCustomerCategory(options?: IGetterOptions): Promise<ICustomerCategory | undefined>;
    setCustomerCategory(customerCategory: ICustomerCategory): void;
    setStockLimitation(stockLimitation: number): void;
    setOfferedItem(offeredItem: ICatalogItem): void;
    getOfferedItem(options?: IGetterOptions): Promise<ICatalogItem | undefined>;
    getStockLimitation(): number | undefined;
}
//# sourceMappingURL=Offer.d.ts.map