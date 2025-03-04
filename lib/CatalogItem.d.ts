import IDefinedProduct from "./IDefinedProduct.js";
import ICatalog from "./ICatalog.js";
import IOffer from "./IOffer.js";
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
    addOffer(offer: IOffer): void;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    setStockLimitation(stockLimitation: number): void;
    getSku(): string | undefined;
    setSku(sku: string): void;
    getStockLimitation(): number | undefined;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    registerInCatalog(repository: ICatalog): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map