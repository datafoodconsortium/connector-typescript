import ISuppliedProduct from "./ISuppliedProduct.js";
import ICatalogItem from "./ICatalogItem.js";
import IEnterprise from "./IEnterprise.js";
import ICatalog from "./ICatalog.js";
import Agent from "./Agent.js";
import ICustomerCategory from "./ICustomerCategory.js";
import Onboardable from "./Onboardable.js";
import ITechnicalProduct from "./ITechnicalProduct.js";
import ProductSupplier from "./ProductSupplier.js";
import IAddress from "./IAddress.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Enterprise extends Agent implements Onboardable, ProductSupplier, IEnterprise {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        localizations?: IAddress[];
        description?: string;
        vatNumber?: string;
        customerCategories?: ICustomerCategory[];
        catalogs?: ICatalog[];
        catalogItems?: ICatalogItem[];
        suppliedProducts?: ISuppliedProduct[];
        technicalProducts?: ITechnicalProduct[];
        doNotStore?: boolean;
    });
    manageCatalogItem(catalogItem: ICatalogItem): void;
    getManagedCatalogItems(options?: IGetterOptions): Promise<Array<ICatalogItem>>;
    unmanageCatalogItem(catalogItem: ICatalogItem): void;
    maintainCatalog(catalog: ICatalog): void;
    getMaintainedCatalogs(options?: IGetterOptions): Promise<Array<ICatalog>>;
    unmaintainCatalog(catalog: ICatalog): void;
    unsupplyProduct(suppliedProduct: ISuppliedProduct): void;
    supplyProduct(suppliedProduct: ISuppliedProduct): void;
    getSuppliedProducts(options?: IGetterOptions): Promise<Array<ISuppliedProduct>>;
    unproposeTechnicalProducts(technicalProducts: ITechnicalProduct): void;
    proposeTechnicalProducts(technicalProducts: ITechnicalProduct): void;
    getProposedTechnicalProducts(options?: IGetterOptions): Promise<Array<ITechnicalProduct>>;
    setDescription(description: string): void;
    getDescription(): string;
    setVatNumber(vatNumber: string): void;
    getVatNumber(): string;
    getCustomerCategories(options?: IGetterOptions): Promise<Array<ICustomerCategory>>;
    addCustomerCategory(customerCategory: ICustomerCategory): void;
}
//# sourceMappingURL=Enterprise.d.ts.map