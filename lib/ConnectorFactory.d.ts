import { Semanticable } from "@virtual-assembly/semantizer";
import DatasetExt from "rdf-ext/lib/Dataset.js";
import { DatasetCore } from '@rdfjs/types';
import IConnector from "./IConnector.js";
import IConnectorFactory from "./IConnectorFactory.js";
import IAgent from "./IAgent.js";
import IAddress from "./IAddress.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import ICatalog from "./ICatalog.js";
import ICatalogItem from "./ICatalogItem.js";
import ICustomerCategory from "./ICustomerCategory.js";
import IEnterprise from "./IEnterprise.js";
import IPrice from "./IPrice.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import IOffer from "./IOffer.js";
import IOrder from "./IOrder.js";
import IOrderLine from "./IOrderLine.js";
import IPerson from "./IPerson.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import IQuantity from "./IQuantity.js";
import ISaleSession from "./ISaleSession.js";
import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import IDefinedProduct from "./IDefinedProduct.js";
export default class ConnectorFactory implements IConnectorFactory {
    private connector;
    constructor(connector: IConnector);
    createFromRdfDatasetCore(dataset: DatasetCore): Semanticable | undefined;
    createAddress(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        street?: string;
        postalCode?: string;
        city?: string;
        country?: string;
    }): IAddress;
    createAllergenCharacteristic(parameters: {
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
        allergenDimension?: ISKOSConcept;
    }): IAllergenCharacteristic;
    createCatalog(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        maintainers?: IEnterprise[];
        items?: ICatalogItem[];
    }): ICatalog;
    createCatalogItem(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        product?: ISuppliedProduct;
        sku?: string;
        stockLimitation?: number;
        offers?: IOffer[];
        catalogs?: ICatalog[];
    }): ICatalogItem;
    createCustomerCategory(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        description?: string;
    }): ICustomerCategory;
    createEnterprise(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        localizations?: IAddress[];
        description?: string;
        vatNumber?: string;
        customerCategories?: ICustomerCategory[];
        catalogs?: ICatalog[];
        catalogItems?: ICatalogItem[];
        suppliedProducts?: ISuppliedProduct[];
    }): IEnterprise;
    createNutrientCharacteristic(parameters: {
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
        nutrientDimension?: ISKOSConcept;
    }): INutrientCharacteristic;
    createOffer(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        offeredItem?: ICatalogItem;
        offeredTo?: ICustomerCategory;
        price?: IPrice;
        stockLimitation?: number;
    }): IOffer;
    createOrder(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        number?: string;
        date?: string;
        saleSession?: ISaleSession;
        client?: IAgent;
        lines?: IOrderLine[];
    }): IOrder;
    createOrderLine(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        quantity?: number;
        price?: IPrice;
        offer?: IOffer;
        order?: IOrder;
    }): IOrderLine;
    createPerson(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        firstName?: string;
        lastName?: string;
        localizations?: IAddress[];
        organizations?: IEnterprise[];
    }): IPerson;
    createPhysicalCharacteristic(parameters: {
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
        physicalDimension?: ISKOSConcept;
    }): IPhysicalCharacteristic;
    createPrice(parameters: {
        other?: Semanticable;
        value?: number;
        vatRate?: number;
        unit?: ISKOSConcept;
    }): IPrice;
    createQuantity(parameters: {
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
    }): IQuantity;
    createSaleSession(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        beginDate?: string;
        endDate?: string;
        quantity?: number;
        offers?: IOffer[];
    }): ISaleSession;
    createSuppliedProduct(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
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
    }): ISuppliedProduct;
    createPlannedTransformation(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        transformationType?: ISKOSConcept;
        consumptionFlow?: IPlannedConsumptionFlow;
        productionFlow?: IPlannedProductionFlow;
    }): IPlannedTransformation;
    createPlannedConsumptionFlow(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedTransformation;
        product?: IDefinedProduct;
    }): IPlannedConsumptionFlow;
    createPlannedProductionFlow(parameters: {
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedTransformation;
        product?: ISuppliedProduct;
    }): IPlannedProductionFlow;
    createFromType(type: string): Semanticable | undefined;
    createFromRdfDataset(dataset: DatasetExt): Semanticable | undefined;
}
//# sourceMappingURL=ConnectorFactory.d.ts.map