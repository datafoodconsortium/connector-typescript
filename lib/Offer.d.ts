import IOffer from "./IOffer.js";
import IPrice from "./IPrice.js";
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
    getStockLimitation(): number | undefined;
    getOfferedItem(options?: IGetterOptions): Promise<ICatalogItem | undefined>;
    setCustomerCategory(customerCategory: ICustomerCategory): void;
    setStockLimitation(stockLimitation: number): void;
    getCustomerCategory(options?: IGetterOptions): Promise<ICustomerCategory | undefined>;
    setOfferedItem(offeredItem: ICatalogItem): void;
    setPrice(price: IPrice): void;
    getPrice(): IPrice | undefined;
}
//# sourceMappingURL=Offer.d.ts.map