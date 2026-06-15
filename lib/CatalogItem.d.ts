import ICatalog from "./ICatalog.js";
import IDefinedProduct from "./IDefinedProduct.js";
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
    getSku(): string | undefined;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    setOffers(offers: IOffer[]): void;
    registerInCatalog(repository: ICatalog): void;
    setCatalogs(catalogs: ICatalog[]): void;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    getStockLimitation(): number | undefined;
    setStockLimitation(stockLimitation: number): void;
    setSku(sku: string): void;
    removeOffer(offer: IOffer): void;
    removeCatalog(catalog: ICatalog): void;
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
}
//# sourceMappingURL=CatalogItem.d.ts.map