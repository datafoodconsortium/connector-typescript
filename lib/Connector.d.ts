import { ISemantizer, Semanticable } from "@virtual-assembly/semantizer";
import DatasetExt from "rdf-ext/lib/Dataset";
import IConnector, { IConnectorCreateParams } from "./IConnector.js";
import IConnectorExporter from "./IConnectorExporter";
import IConnectorExportOptions from "./IConnectorExportOptions.js";
import IConnectorFactory, { AddressCreateParams, AllergenCharacteristicCreateParams, CatalogCreateParams, CatalogItemCreateParams, CertificationCreateParams, CustomerCategoryCreateParams, DeliveryOptionCreateParams, OrganizationCreateParams, LocalizedProductCreateParams, NutrientCharacteristicCreateParams, OfferCreateParams, OpeningHoursSpecificationCreateParams, OrderCreateParams, OrderLineCreateParams, PaymentMethodCreateParams, PersonCreateParams, PhoneNumberCreateParams, PhysicalCharacteristicCreateParams, PhysicalPlaceCreateParams, PhysicalProductCreateParams, PickupOptionCreateParams, PlannedConsumptionFlowCreateParams, PlannedLocalConsumptionFlowCreateParams, PlannedLocalProductionFlowCreateParams, PlannedLocalTransformationCreateParams, PlannedProductionFlowCreateParams, PlannedTransformationCreateParams, PriceCreateParams, ProductBatchCreateParams, QuantityCreateParams, RealizedConsumptionFlowCreateParams, RealizedProductionFlowCreateParams, RealizedTransformationCreateParams, RealStockCreateParams, SaleSessionCreateParams, SocialMediaCreateParams, SuppliedProductCreateParams, TechnicalProductCreateParams, TheoreticalStockCreateParams, VirtualPlaceCreateParams, DeliveryStepCreateParams, PickUpStepCreateParams, ProductOptionCreateParams, ProductOptionValueCreateParams, RouteCreateParams, TemplateSaleSessionCreateParams, VariantCreateParams, VariantCharacteristicCreateParams } from "./IConnectorFactory.js";
import IConnectorImporter from "./IConnectorImporter";
import IConnectorImportOptions from "./IConnectorImportOptions.js";
import IConnectorStore from "./IConnectorStore";
import IGetterOptions from "./IGetterOptions.js";
import IAddress from "./IAddress.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import ICatalog from "./ICatalog.js";
import ICatalogItem from "./ICatalogItem.js";
import ICertification from "./ICertification.js";
import ICustomerCategory from "./ICustomerCategory.js";
import IOrganization from "./IOrganization.js";
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
import IDeliveryOption from "./IDeliveryOption.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IRealStock from "./IRealStock.js";
import ITheoreticalStock from "./ITheoreticalStock.js";
import IOpeningHoursSpecification from "./IOpeningHoursSpecification.js";
import IPhoneNumber from "./IPhoneNumber.js";
import ITechnicalProduct from "./ITechnicalProduct.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPaymentMethod from "./IPaymentMethod.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IPickupOption from "./IPickupOption.js";
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import IProductBatch from "./IProductBatch.js";
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
import ISocialMedia from "./ISocialMedia.js";
import IVirtualPlace from "./IVirtualPlace.js";
import { DatasetCore } from "@rdfjs/types";
import IDeliveryStep from "./IDeliveryStep.js";
import IPickUpStep from "./IPickUpStep.js";
import IProductOption from "./IProductOption.js";
import IProductOptionValue from "./IProductOptionValue.js";
import IRoute from "./IRoute.js";
import ITemplateSaleSession from "./ITemplateSaleSession.js";
import IVariant from "./IVariant.js";
import IVariantCharacteristic from "./IVariantCharacteristic.js";
export default class Connector implements IConnector {
    FACETS?: ISKOSConcept;
    MEASURES?: ISKOSConcept;
    PRODUCT_TYPES?: ISKOSConcept;
    VOCABULARY?: ISKOSConcept;
    COUNTRIES?: ISKOSConcept;
    private semantizer;
    private fetchFunction;
    private factory;
    private importer;
    private exporter;
    private storeObject;
    constructor();
    createFromRdfDataset(dataset: DatasetExt): Semanticable | undefined;
    createFromRdfDatasetCore(dataset: DatasetCore): Semanticable | undefined;
    createFromType(type: string): Semanticable | undefined;
    createAddress(parameters: IConnectorCreateParams & AddressCreateParams): IAddress;
    createAddress(parameters: {
        other: IAddress;
        doNotStore?: boolean;
    }): IAddress;
    createAllergenCharacteristic(parameters: AllergenCharacteristicCreateParams): IAllergenCharacteristic;
    createAllergenCharacteristic(parameters: {
        other: IAllergenCharacteristic;
    }): IAllergenCharacteristic;
    createCatalog(parameters: IConnectorCreateParams & CatalogCreateParams): ICatalog;
    createCatalog(parameters: {
        other: ICatalog;
        doNotStore?: boolean;
    }): ICatalog;
    createCatalogItem(parameters: IConnectorCreateParams & CatalogItemCreateParams): ICatalogItem;
    createCatalogItem(parameters: {
        other: ICatalogItem;
        doNotStore?: boolean;
    }): ICatalogItem;
    createCertification(parameters: IConnectorCreateParams & CertificationCreateParams): ICertification;
    createCertification(parameters: {
        other: ICertification;
        doNotStore?: boolean;
    }): ICertification;
    createCustomerCategory(parameters: IConnectorCreateParams & CustomerCategoryCreateParams): ICustomerCategory;
    createCustomerCategory(parameters: {
        other: ICustomerCategory;
        doNotStore?: boolean;
    }): ICustomerCategory;
    createDeliveryOption(parameters: IConnectorCreateParams & DeliveryOptionCreateParams): IDeliveryOption;
    createDeliveryOption(parameters: {
        other: IDeliveryOption;
        doNotStore?: boolean;
    }): IDeliveryOption;
    createDeliveryStep(parameters: IConnectorCreateParams & DeliveryStepCreateParams): IDeliveryStep;
    createDeliveryStep(parameters: {
        other: IDeliveryStep;
        doNotStore?: boolean;
    }): IDeliveryStep;
    createLocalizedProduct(parameters: IConnectorCreateParams & LocalizedProductCreateParams): ILocalizedProduct;
    createLocalizedProduct(parameters: {
        other: ILocalizedProduct;
        doNotStore?: boolean;
    }): ILocalizedProduct;
    createNutrientCharacteristic(parameters: NutrientCharacteristicCreateParams): INutrientCharacteristic;
    createNutrientCharacteristic(parameters: {
        other: INutrientCharacteristic;
        doNotStore?: boolean;
    }): INutrientCharacteristic;
    createOffer(parameters: IConnectorCreateParams & OfferCreateParams): IOffer;
    createOffer(parameters: {
        other: IOffer;
        doNotStore?: boolean;
    }): IOffer;
    createOpeningHoursSpecification(parameters: IConnectorCreateParams & OpeningHoursSpecificationCreateParams): IOpeningHoursSpecification;
    createOpeningHoursSpecification(parameters: {
        other: IOpeningHoursSpecification;
        doNotStore?: boolean;
    }): IOpeningHoursSpecification;
    createOrder(parameters: IConnectorCreateParams & OrderCreateParams): IOrder;
    createOrder(parameters: {
        other: IOrder;
        doNotStore?: boolean;
    }): IOrder;
    createOrderLine(parameters: IConnectorCreateParams & OrderLineCreateParams): IOrderLine;
    createOrderLine(parameters: {
        other: IOrderLine;
        doNotStore?: boolean;
    }): IOrderLine;
    createOrganization(parameters: IConnectorCreateParams & OrganizationCreateParams): IOrganization;
    createOrganization(parameters: {
        other: IOrganization;
        doNotStore?: boolean;
    }): IOrganization;
    createPaymentMethod(parameters: IConnectorCreateParams & PaymentMethodCreateParams): IPaymentMethod;
    createPaymentMethod(parameters: {
        other: IPaymentMethod;
        doNotStore?: boolean;
    }): IPaymentMethod;
    createPerson(parameters: IConnectorCreateParams & PersonCreateParams): IPerson;
    createPerson(parameters: {
        other: IPerson;
        doNotStore?: boolean;
    }): IPerson;
    createPhoneNumber(parameters: IConnectorCreateParams & PhoneNumberCreateParams): IPhoneNumber;
    createPhoneNumber(parameters: {
        other: IPhoneNumber;
        doNotStore?: boolean;
    }): IPhoneNumber;
    createPhysicalCharacteristic(parameters: PhysicalCharacteristicCreateParams): IPhysicalCharacteristic;
    createPhysicalCharacteristic(parameters: {
        other: IPhysicalCharacteristic;
        doNotStore?: boolean;
    }): IPhysicalCharacteristic;
    createPhysicalPlace(parameters: IConnectorCreateParams & PhysicalPlaceCreateParams): IPhysicalPlace;
    createPhysicalPlace(parameters: {
        other: IPhysicalPlace;
        doNotStore?: boolean;
    }): IPhysicalPlace;
    createPhysicalProduct(parameters: IConnectorCreateParams & PhysicalProductCreateParams): IPhysicalProduct;
    createPhysicalProduct(parameters: {
        other: IPhysicalProduct;
        doNotStore?: boolean;
    }): IPhysicalProduct;
    createPickupOption(parameters: IConnectorCreateParams & PickupOptionCreateParams): IPickupOption;
    createPickupOption(parameters: {
        other: IPickupOption;
        doNotStore?: boolean;
    }): IPickupOption;
    createPickUpStep(parameters: IConnectorCreateParams & PickUpStepCreateParams): IPickUpStep;
    createPickUpStep(parameters: {
        other: IPickUpStep;
        doNotStore?: boolean;
    }): IPickUpStep;
    createPlannedConsumptionFlow(parameters: IConnectorCreateParams & PlannedConsumptionFlowCreateParams): IPlannedConsumptionFlow;
    createPlannedConsumptionFlow(parameters: {
        doNotStore?: boolean;
        other: IPlannedConsumptionFlow;
    }): IPlannedConsumptionFlow;
    createPlannedLocalConsumptionFlow(parameters: IConnectorCreateParams & PlannedLocalConsumptionFlowCreateParams): IPlannedLocalConsumptionFlow;
    createPlannedLocalConsumptionFlow(parameters: {
        other: IPlannedLocalConsumptionFlow;
        doNotStore?: boolean;
    }): IPlannedLocalConsumptionFlow;
    createPlannedLocalProductionFlow(parameters: IConnectorCreateParams & PlannedLocalProductionFlowCreateParams): IPlannedLocalProductionFlow;
    createPlannedLocalProductionFlow(parameters: {
        other: IPlannedLocalProductionFlow;
        doNotStore?: boolean;
    }): IPlannedLocalProductionFlow;
    createPlannedLocalTransformation(parameters: IConnectorCreateParams & PlannedLocalTransformationCreateParams): IPlannedLocalTransformation;
    createPlannedLocalTransformation(parameters: {
        other: IPlannedLocalTransformation;
        doNotStore?: boolean;
    }): IPlannedLocalTransformation;
    createPlannedProductionFlow(parameters: IConnectorCreateParams & PlannedProductionFlowCreateParams): IPlannedProductionFlow;
    createPlannedProductionFlow(parameters: {
        doNotStore?: boolean;
        other: IPlannedProductionFlow;
    }): IPlannedProductionFlow;
    createPlannedTransformation(parameters: IConnectorCreateParams & PlannedTransformationCreateParams): IPlannedTransformation;
    createPlannedTransformation(parameters: {
        doNotStore?: boolean;
        other: IPlannedTransformation;
    }): IPlannedTransformation;
    createPrice(parameters: PriceCreateParams): IPrice;
    createPrice(parameters: {
        other: IPrice;
        doNotStore?: boolean;
    }): IPrice;
    createProductBatch(parameters: IConnectorCreateParams & ProductBatchCreateParams): IProductBatch;
    createProductBatch(parameters: {
        other: IProductBatch;
        doNotStore?: boolean;
    }): IProductBatch;
    createProductOption(parameters: IConnectorCreateParams & ProductOptionCreateParams): IProductOption;
    createProductOption(parameters: {
        other: IProductOption;
        doNotStore?: boolean;
    }): IProductOption;
    createProductOptionValue(parameters: IConnectorCreateParams & ProductOptionValueCreateParams): IProductOptionValue;
    createProductOptionValue(parameters: {
        other: IProductOptionValue;
        doNotStore?: boolean;
    }): IProductOptionValue;
    createQuantity(parameters: QuantityCreateParams): IQuantity;
    createQuantity(parameters: {
        other: IQuantity;
        doNotStore?: boolean;
    }): IQuantity;
    createRealizedConsumptionFlow(parameters: IConnectorCreateParams & RealizedConsumptionFlowCreateParams): IRealizedConsumptionFlow;
    createRealizedConsumptionFlow(parameters: {
        other: IRealizedConsumptionFlow;
        doNotStore?: boolean;
    }): IRealizedConsumptionFlow;
    createRealizedProductionFlow(parameters: IConnectorCreateParams & RealizedProductionFlowCreateParams): IRealizedProductionFlow;
    createRealizedProductionFlow(parameters: {
        other: IRealizedProductionFlow;
        doNotStore?: boolean;
    }): IRealizedProductionFlow;
    createRealizedTransformation(parameters: IConnectorCreateParams & RealizedTransformationCreateParams): IRealizedTransformation;
    createRealizedTransformation(parameters: {
        other: IRealizedTransformation;
        doNotStore?: boolean;
    }): IRealizedTransformation;
    createRealStock(parameters: IConnectorCreateParams & RealStockCreateParams): IRealStock;
    createRealStock(parameters: {
        other: IRealStock;
        doNotStore?: boolean;
    }): IRealStock;
    createRoute(parameters: IConnectorCreateParams & RouteCreateParams): IRoute;
    createRoute(parameters: {
        other: IRoute;
        doNotStore?: boolean;
    }): IRoute;
    createSaleSession(parameters: IConnectorCreateParams & SaleSessionCreateParams): ISaleSession;
    createSaleSession(parameters: {
        other: ISaleSession;
        doNotStore?: boolean;
    }): ISaleSession;
    createSocialMedia(parameters: IConnectorCreateParams & SocialMediaCreateParams): ISocialMedia;
    createSocialMedia(parameters: {
        other: ISocialMedia;
        doNotStore?: boolean;
    }): ISocialMedia;
    createSuppliedProduct(parameters: IConnectorCreateParams & SuppliedProductCreateParams): ISuppliedProduct;
    createSuppliedProduct(parameters: {
        other: ISuppliedProduct;
        doNotStore?: boolean;
    }): ISuppliedProduct;
    createTechnicalProduct(parameters: IConnectorCreateParams & TechnicalProductCreateParams): ITechnicalProduct;
    createTechnicalProduct(parameters: {
        other: ITechnicalProduct;
        doNotStore?: boolean;
    }): ITechnicalProduct;
    createTemplateSaleSession(parameters: IConnectorCreateParams & TemplateSaleSessionCreateParams): ITemplateSaleSession;
    createTemplateSaleSession(parameters: {
        other: ITemplateSaleSession;
        doNotStore?: boolean;
    }): ITemplateSaleSession;
    createTheoreticalStock(parameters: IConnectorCreateParams & TheoreticalStockCreateParams): ITheoreticalStock;
    createTheoreticalStock(parameters: {
        other: ITheoreticalStock;
        doNotStore?: boolean;
    }): ITheoreticalStock;
    createVariant(parameters: IConnectorCreateParams & VariantCreateParams): IVariant;
    createVariant(parameters: {
        other: IVariant;
        doNotStore?: boolean;
    }): IVariant;
    createVariantCharacteristic(parameters: IConnectorCreateParams & VariantCharacteristicCreateParams): IVariantCharacteristic;
    createVariantCharacteristic(parameters: {
        other: IVariantCharacteristic;
        doNotStore?: boolean;
    }): IVariantCharacteristic;
    createVirtualPlace(parameters: IConnectorCreateParams & VirtualPlaceCreateParams): IVirtualPlace;
    createVirtualPlace(parameters: {
        other: IVirtualPlace;
        doNotStore?: boolean;
    }): IVirtualPlace;
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
    loadCountries(countries: any): Promise<void>;
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