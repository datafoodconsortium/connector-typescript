import ICatalogItem from "./ICatalogItem.js";
import ICustomerCategory from "./ICustomerCategory.js";
import IPrice from "./IPrice.js";
import IOffer from "./IOffer.js";
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
    getOfferedItem(options?: IGetterOptions): Promise<ICatalogItem | undefined>;
    setCustomerCategory(customerCategory: ICustomerCategory): void;
    getCustomerCategory(options?: IGetterOptions): Promise<ICustomerCategory | undefined>;
    getPrice(): IPrice | undefined;
    setPrice(price: IPrice): void;
    getStockLimitation(): number | undefined;
    setStockLimitation(stockLimitation: number): void;
    setOfferedItem(offeredItem: ICatalogItem): void;
}
//# sourceMappingURL=Offer.d.ts.map