import ICatalog from "./ICatalog.js";
import IOffer from "./IOffer.js";
import IDefinedProduct from "./IDefinedProduct.js";
import ICatalogItem from "./ICatalogItem.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class CatalogItem extends SemanticObject implements ICatalogItem {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        product?: IDefinedProduct;
        sku?: string;
        stockLimitation?: number;
        offers?: IOffer[];
        catalogs?: ICatalog[];
        doNotStore?: boolean;
    });
    registerInCatalog(repository: ICatalog): void;
    getCatalogs(options?: IGetterOptions): Promise<Array<ICatalog>>;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    getOfferers(options?: IGetterOptions): Promise<Array<IOffer>>;
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    addOffer(offer: IOffer): void;
    setStockLimitation(stockLimitation: number): void;
    getStockLimitation(): number;
    getSku(): string;
    setSku(sku: string): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map