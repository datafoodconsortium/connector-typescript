import ICatalog from "./ICatalog.js";
import ICatalogItem from "./ICatalogItem.js";
import IDefinedProduct from "./IDefinedProduct.js";
import IOffer from "./IOffer.js";
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
    getSku(): string | undefined;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
    getStockLimitation(): number | undefined;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    setSku(sku: string): void;
    setStockLimitation(stockLimitation: number): void;
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    registerInCatalog(repository: ICatalog): void;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    addOffer(offer: IOffer): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map