import IPrice from "./IPrice.js";
import ICustomerCategory from "./ICustomerCategory.js";
import ICatalogItem from "./ICatalogItem.js";
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
    setCustomerCategory(customerCategory: ICustomerCategory): void;
    getOfferedItem(options?: IGetterOptions): Promise<ICatalogItem | undefined>;
    setPrice(price: IPrice): void;
    getStockLimitation(): number | undefined;
    setOfferedItem(offeredItem: ICatalogItem): void;
    getPrice(): IPrice | undefined;
    setStockLimitation(stockLimitation: number): void;
    getCustomerCategory(options?: IGetterOptions): Promise<ICustomerCategory | undefined>;
}
//# sourceMappingURL=Offer.d.ts.map