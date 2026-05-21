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
    setSku(sku: string): void;
    setCatalogs(catalogs: ICatalog[]): void;
    registerInCatalog(repository: ICatalog): void;
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    getStockLimitation(): number | undefined;
    setOffers(offers: IOffer[]): void;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    setStockLimitation(stockLimitation: number): void;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
    removeCatalog(catalog: ICatalog): void;
    addOffer(offer: IOffer): void;
    removeOffer(offer: IOffer): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map