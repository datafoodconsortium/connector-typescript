import DatasetExt from "rdf-ext/lib/Dataset.js";
// Generated Classes
import Address from "./Address.js";
import AllergenCharacteristic from "./AllergenCharacteristic.js";
import Catalog from "./Catalog.js";
import CatalogItem from "./CatalogItem.js";
import CustomerCategory from "./CustomerCategory.js";
import DeliveryOption from "./DeliveryOption.js";
import Enterprise from "./Enterprise.js";
import NutrientCharacteristic from "./NutrientCharacteristic.js";
import Offer from "./Offer.js";
import Order from "./Order.js";
import OrderLine from "./OrderLine.js";
import Person from "./Person.js";
import PhysicalCharacteristic from "./PhysicalCharacteristic.js";
import Price from "./Price.js";
import SaleSession from "./SaleSession.js";
import SKOSConcept from "./SKOSConcept.js";
import SuppliedProduct from "./SuppliedProduct.js";
import PlannedTransformation from "./PlannedTransformation.js";
import PlannedConsumptionFlow from "./PlannedConsumptionFlow.js";
import PlannedProductionFlow from "./PlannedProductionFlow.js";
import LocalizedProduct from "./LocalizedProduct.js";
import PaymentMethod from "./PaymentMethod.js";
import PhoneNumber from "./PhoneNumber.js";
import PhysicalProduct from "./PhysicalProduct.js";
import PickupOption from "./PickupOption.js";
import PlannedLocalConsumptionFlow from "./PlannedLocalConsumptionFlow.js";
import PlannedLocalProductionFlow from "./PlannedLocalProductionFlow.js";
import PlannedLocalTransformation from "./PlannedLocalTransformation.js";
import ProductBatch from "./ProductBatch.js";
import QuantitativeValue from "./QuantitativeValue.js";
import RealizedConsumptionFlow from "./RealizedConsumptionFlow.js";
import RealizedProductionFlow from "./RealizedProductionFlow.js";
import RealizedTransformation from "./RealizedTransformation.js";
import RealStock from "./RealStock.js";
import SocialMedia from "./SocialMedia.js";
import TechnicalProduct from "./TechnicalProduct.js";
import TheoreticalStock from "./TheoreticalStock.js";
import VirtualPlace from "./VirtualPlace.js";
import PhysicalPlace from "./PhysicalPlace.js";
import OpeningHoursSpecification from "./OpeningHoursSpecification.js";
export default class ConnectorFactory {
    constructor(connector) {
        this.connector = connector;
    }
    createFromRdfDatasetCore(dataset) {
        const datasetExt = new DatasetExt();
        datasetExt.addAll(dataset);
        return this.createFromRdfDataset(datasetExt);
    }
    createAddress(parameters) {
        return new Address(Object.assign({ connector: this.connector }, parameters));
    }
    createAllergenCharacteristic(parameters) {
        return new AllergenCharacteristic(Object.assign({ connector: this.connector }, parameters));
    }
    createCatalog(parameters) {
        return new Catalog(Object.assign({ connector: this.connector }, parameters));
    }
    createCatalogItem(parameters) {
        return new CatalogItem(Object.assign({ connector: this.connector }, parameters));
    }
    createCustomerCategory(parameters) {
        return new CustomerCategory(Object.assign({ connector: this.connector }, parameters));
    }
    createDeliveryOption(parameters) {
        return new DeliveryOption(Object.assign({ connector: this.connector }, parameters));
    }
    createEnterprise(parameters) {
        return new Enterprise(Object.assign({ connector: this.connector }, parameters));
    }
    createLocalizedProduct(parameters) {
        return new LocalizedProduct(Object.assign({ connector: this.connector }, parameters));
    }
    createNutrientCharacteristic(parameters) {
        return new NutrientCharacteristic(Object.assign({ connector: this.connector }, parameters));
    }
    createOffer(parameters) {
        return new Offer(Object.assign({ connector: this.connector }, parameters));
    }
    createOpeningHoursSpecification(parameters) {
        return new OpeningHoursSpecification(Object.assign({ connector: this.connector }, parameters));
    }
    createOrder(parameters) {
        return new Order(Object.assign({ connector: this.connector }, parameters));
    }
    createOrderLine(parameters) {
        return new OrderLine(Object.assign({ connector: this.connector }, parameters));
    }
    createPaymentMethod(parameters) {
        return new PaymentMethod(Object.assign({ connector: this.connector }, parameters));
    }
    createPerson(parameters) {
        return new Person(Object.assign({ connector: this.connector }, parameters));
    }
    createPhoneNumber(parameters) {
        return new PhoneNumber(Object.assign({ connector: this.connector }, parameters));
    }
    createPhysicalCharacteristic(parameters) {
        return new PhysicalCharacteristic(Object.assign({ connector: this.connector }, parameters));
    }
    createPhysicalPlace(parameters) {
        return new PhysicalPlace(Object.assign({ connector: this.connector }, parameters));
    }
    createPhysicalProduct(parameters) {
        return new PhysicalProduct(Object.assign({ connector: this.connector }, parameters));
    }
    createPickupOption(parameters) {
        return new PickupOption(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedConsumptionFlow(parameters) {
        return new PlannedConsumptionFlow(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedLocalConsumptionFlow(parameters) {
        return new PlannedLocalConsumptionFlow(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedLocalProductionFlow(parameters) {
        return new PlannedLocalProductionFlow(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedLocalTransformation(parameters) {
        return new PlannedLocalTransformation(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedProductionFlow(parameters) {
        return new PlannedProductionFlow(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedTransformation(parameters) {
        return new PlannedTransformation(Object.assign({ connector: this.connector }, parameters));
    }
    createPrice(parameters) {
        return new Price(Object.assign({ connector: this.connector }, parameters));
    }
    createProductBatch(parameters) {
        return new ProductBatch(Object.assign({ connector: this.connector }, parameters));
    }
    createQuantity(parameters) {
        return new QuantitativeValue(Object.assign({ connector: this.connector }, parameters));
    }
    createRealizedConsumptionFlow(parameters) {
        return new RealizedConsumptionFlow(Object.assign({ connector: this.connector }, parameters));
    }
    createRealizedProductionFlow(parameters) {
        return new RealizedProductionFlow(Object.assign({ connector: this.connector }, parameters));
    }
    createRealizedTransformation(parameters) {
        return new RealizedTransformation(Object.assign({ connector: this.connector }, parameters));
    }
    createRealStock(parameters) {
        return new RealStock(Object.assign({ connector: this.connector }, parameters));
    }
    createSaleSession(parameters) {
        return new SaleSession(Object.assign({ connector: this.connector }, parameters));
    }
    createSocialMedia(parameters) {
        return new SocialMedia(Object.assign({ connector: this.connector }, parameters));
    }
    createSuppliedProduct(parameters) {
        return new SuppliedProduct(Object.assign({ connector: this.connector }, parameters));
    }
    createTechnicalProduct(parameters) {
        return new TechnicalProduct(Object.assign({ connector: this.connector }, parameters));
    }
    createTheoreticalStock(parameters) {
        return new TheoreticalStock(Object.assign({ connector: this.connector }, parameters));
    }
    createVirtualPlace(parameters) {
        return new VirtualPlace(Object.assign({ connector: this.connector }, parameters));
    }
    createFromType(type) {
        let result = undefined;
        const prefix = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#";
        switch (type) {
            case prefix + "Address":
                result = this.createAddress({ semanticId: "" });
                break;
            case prefix + "AllergenCharacteristic":
                result = this.createAllergenCharacteristic({});
                break;
            case prefix + "AsPlannedConsumptionFlow":
                result = this.createPlannedConsumptionFlow({ semanticId: "" });
                break;
            case prefix + "AsPlannedLocalConsumptionFlow":
                result = this.createPlannedLocalConsumptionFlow({ semanticId: "" });
                break;
            case prefix + "AsPlannedLocalProductionFlow":
                result = this.createPlannedLocalProductionFlow({ semanticId: "" });
                break;
            case prefix + "AsPlannedLocalTransformation":
                result = this.createPlannedLocalTransformation({ semanticId: "" });
                break;
            case prefix + "AsPlannedProductionFlow":
                result = this.createPlannedProductionFlow({ semanticId: "" });
                break;
            case prefix + "AsPlannedTransformation":
                result = this.createPlannedTransformation({ semanticId: "" });
                break;
            case prefix + "AsRealizedConsumptionFlow":
                result = this.createRealizedConsumptionFlow({ semanticId: "" });
                break;
            case prefix + "AsRealizedProductionFlow":
                result = this.createRealizedProductionFlow({ semanticId: "" });
                break;
            case prefix + "AsRealizedTransformation":
                result = this.createRealizedTransformation({ semanticId: "" });
                break;
            case prefix + "Catalog":
                result = this.createCatalog({ semanticId: "" });
                break;
            case prefix + "CatalogItem":
                result = this.createCatalogItem({ semanticId: "" });
                break;
            case prefix + "CustomerCategory":
                result = this.createCustomerCategory({ semanticId: "" });
                break;
            case prefix + "DeliveryOption":
                result = this.createDeliveryOption({ semanticId: "" });
                break;
            case prefix + "Enterprise":
                result = this.createEnterprise({ semanticId: "" });
                break;
            case prefix + "LocalizedProduct":
                result = this.createLocalizedProduct({ semanticId: "" });
                break;
            case prefix + "NutrientCharacteristic":
                result = this.createNutrientCharacteristic({});
                break;
            case prefix + "Offer":
                result = this.createOffer({ semanticId: "" });
                break;
            case "https://schema.org/OpeningHoursSpecification":
                result = this.createOpeningHoursSpecification({ semanticId: "" });
                break;
            case prefix + "Order":
                result = this.createOrder({ semanticId: "" });
                break;
            case prefix + "OrderLine":
                result = this.createOrderLine({ semanticId: "" });
                break;
            case prefix + "PaymentMethod":
                result = this.createPaymentMethod({ semanticId: "" });
                break;
            case prefix + "Person":
                result = this.createPerson({ semanticId: "" });
                break;
            case prefix + "PhoneNumber":
                result = this.createPhoneNumber({ semanticId: "" });
                break;
            case prefix + "PhysicalCharacteristic":
                result = this.createPhysicalCharacteristic({});
                break;
            case prefix + "PhysicalPlace":
                result = this.createPhysicalPlace({ semanticId: "" });
                break;
            case prefix + "PhysicalProduct":
                result = this.createPhysicalProduct({ semanticId: "" });
                break;
            case prefix + "PickupOption":
                result = this.createPickupOption({ semanticId: "" });
                break;
            case prefix + "Price":
                result = this.createPrice({});
                break;
            case prefix + "ProductBatch":
                result = this.createProductBatch({ semanticId: "" });
                break;
            case prefix + "QuantitativeValue":
                result = this.createQuantity({});
                break;
            case prefix + "RealStock":
                result = this.createRealStock({ semanticId: "" });
                break;
            case prefix + "SaleSession":
                result = this.createSaleSession({ semanticId: "" });
                break;
            case prefix + "SocialMedia":
                result = this.createSocialMedia({ semanticId: "" });
                break;
            case prefix + "SuppliedProduct":
                result = this.createSuppliedProduct({ semanticId: "" });
                break;
            case prefix + "TechnicalProduct":
                result = this.createTechnicalProduct({ semanticId: "" });
                break;
            case prefix + "TheoreticalStock":
                result = this.createTheoreticalStock({ semanticId: "" });
                break;
            case prefix + "VirtualPlace":
                result = this.createVirtualPlace({ semanticId: "" });
                break;
            case "http://www.w3.org/2004/02/skos/core#Concept":
                result = new SKOSConcept({ connector: this.connector, semanticId: "" });
                break;
            case "http://www.w3.org/2004/02/skos/core#ConceptScheme":
                result = new SKOSConcept({ connector: this.connector, semanticId: "" });
                // @ts-ignore
                result._semanticType = "http://www.w3.org/2004/02/skos/core#ConceptScheme";
                break;
            default:
                throw new Error(`Unknown type "${type}"`);
        }
        return result;
    }
    createFromRdfDataset(dataset) {
        const rdfType = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type';
        const quad = Array.from(dataset.filter((quad) => quad.predicate.value === rdfType))[0];
        const type = quad.object.value;
        const semanticObject = this.createFromType(type);
        if (semanticObject)
            semanticObject.setSemanticPropertyAllFromRdfDataset(dataset);
        return semanticObject;
    }
}
//# sourceMappingURL=ConnectorFactory.js.map