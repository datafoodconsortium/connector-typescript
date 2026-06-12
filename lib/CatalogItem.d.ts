import ICatalogItem from "./ICatalogItem.js";
import IOffer from "./IOffer.js";
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
    removeCatalog(catalog: ICatalog): void;
    setCatalogs(catalogs: ICatalog[]): void;
    removeOffer(offer: IOffer): void;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    getSku(): string | undefined;
    registerInCatalog(repository: ICatalog): void;
    getStockLimitation(): number | undefined;
    addOffer(offer: IOffer): void;
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    setOffers(offers: IOffer[]): void;
    setStockLimitation(stockLimitation: number): void;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    setSku(sku: string): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map