import DatasetExt from "rdf-ext/lib/Dataset.js";
// Generated Classes
import Address from "./Address.js";
import AllergenCharacteristic from "./AllergenCharacteristic.js";
import Catalog from "./Catalog.js";
import CatalogItem from "./CatalogItem.js";
import CustomerCategory from "./CustomerCategory.js";
import Enterprise from "./Enterprise.js";
import NutrientCharacteristic from "./NutrientCharacteristic.js";
import Offer from "./Offer.js";
import Order from "./Order.js";
import OrderLine from "./OrderLine.js";
import Person from "./Person.js";
import PhysicalCharacteristic from "./PhysicalCharacteristic.js";
import Price from "./Price.js";
import QuantitativeValue from "./QuantitativeValue.js";
import SaleSession from "./SaleSession.js";
import SKOSConcept from "./SKOSConcept.js";
import SuppliedProduct from "./SuppliedProduct.js";
import PlannedTransformation from "./PlannedTransformation.js";
import PlannedConsumptionFlow from "./PlannedConsumptionFlow.js";
import PlannedProductionFlow from "./PlannedProductionFlow.js";
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
    createEnterprise(parameters) {
        return new Enterprise(Object.assign({ connector: this.connector }, parameters));
    }
    createNutrientCharacteristic(parameters) {
        return new NutrientCharacteristic(Object.assign({ connector: this.connector }, parameters));
    }
    createOffer(parameters) {
        return new Offer(Object.assign({ connector: this.connector }, parameters));
    }
    createOrder(parameters) {
        return new Order(Object.assign({ connector: this.connector }, parameters));
    }
    createOrderLine(parameters) {
        return new OrderLine(Object.assign({ connector: this.connector }, parameters));
    }
    createPerson(parameters) {
        return new Person(Object.assign({ connector: this.connector }, parameters));
    }
    createPhysicalCharacteristic(parameters) {
        return new PhysicalCharacteristic(Object.assign({ connector: this.connector }, parameters));
    }
    createPrice(parameters) {
        return new Price(Object.assign({ connector: this.connector }, parameters));
    }
    createQuantity(parameters) {
        return new QuantitativeValue(Object.assign({ connector: this.connector }, parameters));
    }
    createSaleSession(parameters) {
        return new SaleSession(Object.assign({ connector: this.connector }, parameters));
    }
    createSuppliedProduct(parameters) {
        return new SuppliedProduct(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedTransformation(parameters) {
        return new PlannedTransformation(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedConsumptionFlow(parameters) {
        return new PlannedConsumptionFlow(Object.assign({ connector: this.connector }, parameters));
    }
    createPlannedProductionFlow(parameters) {
        return new PlannedProductionFlow(Object.assign({ connector: this.connector }, parameters));
    }
    createFromType(type) {
        let result = undefined;
        const prefix = "https://github.com/datafoodconsortium/ontology/releases/latest/download/DFC_BusinessOntology.owl#";
        switch (type) {
            case prefix + "Enterprise":
                result = this.createEnterprise({ semanticId: "" });
                break;
            case prefix + "Address":
                result = this.createAddress({ semanticId: "" });
                break;
            case prefix + "Person":
                result = this.createPerson({ semanticId: "" });
                break;
            case prefix + "CustomerCategory":
                result = this.createCustomerCategory({ semanticId: "" });
                break;
            case prefix + "QuantitativeValue":
                result = this.createQuantity({});
                break;
            case prefix + "AllergenCharacteristic":
                result = this.createAllergenCharacteristic({});
                break;
            case prefix + "NutrientCharacteristic":
                result = this.createNutrientCharacteristic({});
                break;
            case prefix + "PhysicalCharacteristic":
                result = this.createPhysicalCharacteristic({});
                break;
            case prefix + "SuppliedProduct":
                result = this.createSuppliedProduct({ semanticId: "" });
                break;
            case prefix + "Price":
                result = this.createPrice({});
                break;
            case prefix + "Catalog":
                result = this.createCatalog({ semanticId: "" });
                break;
            case prefix + "CatalogItem":
                result = this.createCatalogItem({ semanticId: "" });
                break;
            case prefix + "Offer":
                result = this.createOffer({ semanticId: "" });
                break;
            case prefix + "Order":
                result = this.createOrder({ semanticId: "" });
                break;
            case prefix + "OrderLine":
                result = this.createOrderLine({ semanticId: "" });
                break;
            case prefix + "AsPlannedTransformation":
                result = this.createPlannedTransformation({ semanticId: "" });
                break;
            case prefix + "AsPlannedConsumptionFlow":
                result = this.createPlannedConsumptionFlow({ semanticId: "" });
                break;
            case prefix + "AsPlannedProductionFlow":
                result = this.createPlannedProductionFlow({ semanticId: "" });
                break;
            case prefix + "SaleSession":
                result = this.createSaleSession({ semanticId: "" });
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