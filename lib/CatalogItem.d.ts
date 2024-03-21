import ICatalogItem from "./ICatalogItem.js";
import IDefinedProduct from "./IDefinedProduct.js";
import ICatalog from "./ICatalog.js";
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
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    getSku(): string | undefined;
    addOffer(offer: IOffer): void;
    registerInCatalog(repository: ICatalog): void;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
    getStockLimitation(): number | undefined;
    setSku(sku: string): void;
    setStockLimitation(stockLimitation: number): void;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map