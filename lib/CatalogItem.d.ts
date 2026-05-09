import IOffer from "./IOffer.js";
import ICatalogItem from "./ICatalogItem.js";
import IDefinedProduct from "./IDefinedProduct.js";
import ICatalog from "./ICatalog.js";
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
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    setStockLimitation(stockLimitation: number): void;
    registerInCatalog(repository: ICatalog): void;
    getStockLimitation(): number | undefined;
    addOffer(offer: IOffer): void;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    setSku(sku: string): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map