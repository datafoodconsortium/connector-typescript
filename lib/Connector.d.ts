import { ISemantizer, Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IConnectorExporter from "./IConnectorExporter";
import IConnectorExportOptions from "./IConnectorExportOptions.js";
import IConnectorFactory from "./IConnectorFactory.js";
import IConnectorImporter from "./IConnectorImporter";
import IConnectorImportOptions from "./IConnectorImportOptions.js";
import IConnectorStore from "./IConnectorStore";
import IGetterOptions from "./IGetterOptions.js";
import IAddress from "./IAddress.js";
import IAgent from "./IAgent.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import ICatalog from "./ICatalog.js";
import ICatalogItem from "./ICatalogItem.js";
import ICustomerCategory from "./ICustomerCategory.js";
import IEnterprise from "./IEnterprise.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import IOffer from "./IOffer.js";
import IOrder from "./IOrder.js";
import IOrderLine from "./IOrderLine.js";
import IPerson from "./IPerson.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import IPrice from "./IPrice.js";
import IQuantity from "./IQuantity.js";
import ISaleSession from "./ISaleSession.js";
import ISKOSConcept from "./ISKOSConcept";
import ISuppliedProduct from "./ISuppliedProduct.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import IDefinedProduct from "./IDefinedProduct.js";
export default class Connector implements IConnector {
    FACETS?: ISKOSConcept;
    MEASURES?: ISKOSConcept;
    PRODUCT_TYPES?: ISKOSConcept;
    VOCABULARY?: ISKOSConcept;
    private semantizer;
    private fetchFunction;
    private factory;
    private importer;
    private exporter;
    private storeObject;
    constructor();
    createAddress(parameters: {
        semanticId: string;
        street?: string;
        postalCode?: string;
        city?: string;
        country?: string;
        doNotStore?: boolean;
    }): IAddress;
    createAddress(parameters: {
        other: IAddress;
        doNotStore?: boolean;
    }): IAddress;
    createAllergenCharacteristic(parameters: {
        unit?: ISKOSConcept;
        value?: number;
        allergenDimension?: ISKOSConcept;
    }): IAllergenCharacteristic;
    createAllergenCharacteristic(parameters: {
        other: IAllergenCharacteristic;
    }): IAllergenCharacteristic;
    createCatalog(parameters: {
        semanticId: string;
        maintainers?: IEnterprise[];
        items?: ICatalogItem[];
        doNotStore?: boolean;
    }): ICatalog;
    createCatalog(parameters: {
        other: ICatalog;
        doNotStore?: boolean;
    }): ICatalog;
    createCatalogItem(parameters: {
        semanticId: string;
        product?: ISuppliedProduct;
        sku?: string;
        stockLimitation?: number;
        offers?: IOffer[];
        catalogs?: ICatalog[];
        doNotStore?: boolean;
    }): ICatalogItem;
    createCatalogItem(parameters: {
        other: ICatalogItem;
        doNotStore?: boolean;
    }): ICatalogItem;
    createCustomerCategory(parameters: {
        semanticId: string;
        description?: string;
        doNotStore?: boolean;
    }): ICustomerCategory;
    createCustomerCategory(parameters: {
        other: ICustomerCategory;
        doNotStore?: boolean;
    }): ICustomerCategory;
    createEnterprise(parameters: {
        semanticId: string;
        localizations?: IAddress[];
        description?: string;
        vatNumber?: string;
        customerCategories?: ICustomerCategory[];
        catalogs?: ICatalog[];
        catalogItems?: ICatalogItem[];
        suppliedProducts?: ISuppliedProduct[];
        doNotStore?: boolean;
    }): IEnterprise;
    createEnterprise(parameters: {
        other: IEnterprise;
        doNotStore?: boolean;
    }): IEnterprise;
    createNutrientCharacteristic(parameters: {
        unit?: ISKOSConcept;
        value?: number;
        nutrientDimension?: ISKOSConcept;
    }): INutrientCharacteristic;
    createNutrientCharacteristic(parameters: {
        other: INutrientCharacteristic;
        doNotStore?: boolean;
    }): INutrientCharacteristic;
    createOffer(parameters: {
        semanticId: string;
        offeredItem?: ICatalogItem;
        offeredTo?: ICustomerCategory;
        price?: IPrice;
        stockLimitation?: number;
        doNotStore?: boolean;
    }): IOffer;
    createOffer(parameters: {
        other: IOffer;
        doNotStore?: boolean;
    }): IOffer;
    createOrder(parameters: {
        semanticId: string;
        number?: string;
        date?: string;
        saleSession?: ISaleSession;
        client?: IAgent;
        lines?: IOrderLine[];
        doNotStore?: boolean;
    }): IOrder;
    createOrder(parameters: {
        other: IOrder;
        doNotStore?: boolean;
    }): IOrder;
    createOrderLine(parameters: {
        semanticId: string;
        quantity?: number;
        price?: IPrice;
        offer?: IOffer;
        order?: IOrder;
        doNotStore?: boolean;
    }): IOrderLine;
    createOrderLine(parameters: {
        other: IOrderLine;
        doNotStore?: boolean;
    }): IOrderLine;
    createPerson(parameters: {
        semanticId: string;
        firstName?: string;
        lastName?: string;
        localizations?: IAddress[];
        organizations?: IEnterprise[];
        doNotStore?: boolean;
    }): IPerson;
    createPerson(parameters: {
        other: IPerson;
        doNotStore?: boolean;
    }): IPerson;
    createPhysicalCharacteristic(parameters: {
        unit: ISKOSConcept;
        value?: number;
        physicalDimension?: ISKOSConcept;
    }): IPhysicalCharacteristic;
    createPhysicalCharacteristic(parameters: {
        other: IPhysicalCharacteristic;
        doNotStore?: boolean;
    }): IPhysicalCharacteristic;
    createPrice(parameters: {
        value?: number;
        vatRate?: number;
        unit?: ISKOSConcept;
    }): IPrice;
    createPrice(parameters: {
        other: IPrice;
        doNotStore?: boolean;
    }): IPrice;
    createQuantity(parameters: {
        unit?: ISKOSConcept;
        value?: number;
    }): IQuantity;
    createQuantity(parameters: {
        other: IQuantity;
        doNotStore?: boolean;
    }): IQuantity;
    createSaleSession(parameters: {
        semanticId: string;
        beginDate?: string;
        endDate?: string;
        quantity?: number;
        offers?: IOffer[];
        doNotStore?: boolean;
    }): ISaleSession;
    createSaleSession(parameters: {
        other: ISaleSession;
        doNotStore?: boolean;
    }): ISaleSession;
    createSuppliedProduct(parameters: {
        semanticId: string;
        name?: string;
        description?: string;
        productType?: ISKOSConcept;
        quantity?: IQuantity;
        alcoholPercentage?: number;
        lifetime?: string;
        claims?: ISKOSConcept[];
        usageOrStorageConditions?: string;
        allergenCharacteristics?: IAllergenCharacteristic[];
        nutrientCharacteristics?: INutrientCharacteristic[];
        physicalCharacteristics?: IPhysicalCharacteristic[];
        geographicalOrigin?: ISKOSConcept;
        catalogItems?: ICatalogItem[];
        certifications?: ISKOSConcept[];
        natureOrigin?: ISKOSConcept[];
        partOrigin?: ISKOSConcept[];
        totalTheoreticalStock?: number;
        doNotStore?: boolean;
    }): ISuppliedProduct;
    createSuppliedProduct(parameters: {
        other: ISuppliedProduct;
        doNotStore?: boolean;
    }): ISuppliedProduct;
    createPlannedTransformation(parameters: {
        doNotStore?: boolean;
        semanticId: string;
        transformationType?: ISKOSConcept;
        consumptionFlow?: IPlannedConsumptionFlow;
        productionFlow?: IPlannedProductionFlow;
    }): IPlannedTransformation;
    createPlannedTransformation(parameters: {
        doNotStore?: boolean;
        other: IPlannedTransformation;
    }): IPlannedTransformation;
    createPlannedConsumptionFlow(parameters: {
        doNotStore?: boolean;
        semanticId: string;
        quantity?: IQuantity;
        transformation?: IPlannedTransformation;
        product?: IDefinedProduct;
    }): IPlannedConsumptionFlow;
    createPlannedConsumptionFlow(parameters: {
        doNotStore?: boolean;
        other: IPlannedConsumptionFlow;
    }): IPlannedConsumptionFlow;
    createPlannedProductionFlow(parameters: {
        doNotStore?: boolean;
        semanticId: string;
        quantity?: IQuantity;
        transformation?: IPlannedTransformation;
        product?: ISuppliedProduct;
    }): IPlannedProductionFlow;
    createPlannedProductionFlow(parameters: {
        doNotStore?: boolean;
        other: IPlannedProductionFlow;
    }): IPlannedProductionFlow;
    export(objects: Array<Semanticable>, options?: IConnectorExportOptions): Promise<string>;
    getSemantizer(): ISemantizer;
    getDefaultFactory(): IConnectorFactory;
    import(data: string, options?: IConnectorImportOptions): Promise<Array<Semanticable>>;
    importOne(data: string, options?: IConnectorImportOptions): Promise<Semanticable | undefined>;
    importOneTyped<Type>(data: string, options?: IConnectorImportOptions): Promise<Type | undefined>;
    private importThesaurus;
    loadFacets(facets: any): Promise<void>;
    loadMeasures(measures: any): Promise<void>;
    loadProductTypes(productTypes: any): Promise<void>;
    loadVocabulary(vocabulary: any): Promise<void>;
    fetch(semanticObject: string, options?: IGetterOptions): Promise<Semanticable | undefined>;
    setDefaultFactory(factory: IConnectorFactory): void;
    setDefaultFetchFunction(fetch: (semanticId: string) => Promise<Response>): void;
    setDefaultExporter(exporter: IConnectorExporter): void;
    setDefaultImporter(importer: IConnectorImporter): void;
    setDefaultStore(store: IConnectorStore): void;
    store(semanticObject: Semanticable): void;
    removeFromStore(semanticObjectId: string): void;
}
//# sourceMappingURL=Connector.d.ts.map