import IOffer from "./IOffer.js";
import IDefinedProduct from "./IDefinedProduct.js";
import ICatalogItem from "./ICatalogItem.js";
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
    removeOffer(offer: IOffer): void;
    getCatalogs(options?: IGetterOptions): Promise<ICatalog[]>;
    setStockLimitation(stockLimitation: number): void;
    addOffer(offer: IOffer): void;
    setOfferedProduct(offeredProduct: IDefinedProduct): void;
    getOfferedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    setCatalogs(catalogs: ICatalog[]): void;
    getStockLimitation(): number | undefined;
    getSku(): string | undefined;
    setSku(sku: string): void;
    removeCatalog(catalog: ICatalog): void;
    getOfferers(options?: IGetterOptions): Promise<IOffer[]>;
    setOffers(offers: IOffer[]): void;
    registerInCatalog(repository: ICatalog): void;
}
//# sourceMappingURL=CatalogItem.d.ts.map