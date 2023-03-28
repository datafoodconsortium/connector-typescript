import { Semanticable } from "@virtual-assembly/semantizer";
import IConnectorFactory from "./IConnectorFactory.js";
import IAddress from "./IAddress.js";
import IConnector from "./IConnector.js";
import DatasetExt from "rdf-ext/lib/Dataset.js";
import { DatasetCore } from '@rdfjs/types';
import IAllergenDimension from "./IAllergenDimension.js";
import IUnit from "./IUnit.js";
import ICatalogItem from "./ICatalogItem.js";
import IEnterprise from "./IEnterprise.js";
import ICatalog from "./ICatalog.js";
import IOffer from "./IOffer.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import ICustomerCategory from "./ICustomerCategory.js";
import INutrientDimension from "./INutrientDimension.js";
import IPrice from "./IPrice.js";
import IOrderLine from "./IOrderLine.js";
import IAgent from "./IAgent.js";
import ISaleSession from "./ISaleSession.js";
import IOrder from "./IOrder.js";
import IPhysicalDimension from "./IPhysicalDimension.js";
import IPartOrigin from "./IPartOrigin.js";
import INatureOrigin from "./INatureOrigin.js";
import ICertification from "./ICertification.js";
import IGeographicalOrigin from "./IGeographicalOrigin.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import IClaim from "./IClaim.js";
import IQuantity from "./IQuantity.js";
import IProductType from "./IProductType.js";
import IPerson from "./IPerson.js";
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
        unit?: IUnit;
        value?: number;
        allergenDimension?: IAllergenDimension;
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
        unit?: IUnit;
        value?: number;
        nutrientDimension?: INutrientDimension;
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
        unit?: IUnit;
        value?: number;
        physicalDimension?: IPhysicalDimension;
    }): IPhysicalCharacteristic;
    createPrice(parameters: {
        other?: Semanticable;
        value?: number;
        vatRate?: number;
        unit?: IUnit;
    }): IPrice;
    createQuantity(parameters: {
        other?: Semanticable;
        unit?: IUnit;
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
        productType?: IProductType;
        quantity?: IQuantity;
        alcoholPercentage?: number;
        lifetime?: string;
        claims?: IClaim[];
        usageOrStorageConditions?: string;
        allergenCharacteristics?: IAllergenCharacteristic[];
        nutrientCharacteristics?: INutrientCharacteristic[];
        physicalCharacteristics?: IPhysicalCharacteristic[];
        geographicalOrigin?: IGeographicalOrigin;
        catalogItems?: ICatalogItem[];
        certifications?: ICertification[];
        natureOrigin?: INatureOrigin[];
        partOrigin?: IPartOrigin[];
        totalTheoreticalStock?: number;
    }): ISuppliedProduct;
    createFromType(type: string): Semanticable | undefined;
    createFromRdfDataset(dataset: DatasetExt): Semanticable | undefined;
}
//# sourceMappingURL=ConnectorFactory.d.ts.map