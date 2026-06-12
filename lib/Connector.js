var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Exernal
import { Semantizer } from "@virtual-assembly/semantizer";
// Static
import ConnectorExporterJsonldStream from "./ConnectorExporterJsonldStream.js";
import ConnectorFactory from "./ConnectorFactory.js";
import ConnectorImporterJsonldStream from "./ConnectorImporterJsonldStream.js";
import ConnectorStoreMap from "./ConnectorStoreMap.js";
import context from "./context.js";
import { ConnectorImporterJsonldStreamDocumentLoader } from "./ConnectorImporterJsonldStreamDocumentLoader.js";
export default class Connector {
    constructor() {
        this.semantizer = new Semantizer(context);
        this.storeObject = new ConnectorStoreMap();
        this.fetchFunction = (semanticId) => __awaiter(this, void 0, void 0, function* () { return (yield fetch(semanticId)); });
        this.factory = new ConnectorFactory(this);
        this.importer = new ConnectorImporterJsonldStream({ context: context, documentLoader: new ConnectorImporterJsonldStreamDocumentLoader });
        const outputContext = "https://www.datafoodconsortium.org/wp-content/plugins/wordpress-context-jsonld/context_2.0.0.jsonld";
        this.exporter = new ConnectorExporterJsonldStream(context, outputContext);
    }
    createFromRdfDataset(dataset) {
        return this.factory.createFromRdfDataset(dataset);
    }
    createFromRdfDatasetCore(dataset) {
        return this.factory.createFromRdfDatasetCore(dataset);
    }
    createFromType(type) {
        return this.factory.createFromType(type);
    }
    createAddress(parameters) {
        return this.factory.createAddress(parameters);
    }
    createAllergenCharacteristic(parameters) {
        return this.factory.createAllergenCharacteristic(parameters);
    }
    createCatalog(parameters) {
        return this.factory.createCatalog(parameters);
    }
    createCatalogItem(parameters) {
        return this.factory.createCatalogItem(parameters);
    }
    createCertification(parameters) {
        return this.factory.createCertification(parameters);
    }
    createCustomerCategory(parameters) {
        return this.factory.createCustomerCategory(parameters);
    }
    createDeliveryOption(parameters) {
        return this.factory.createDeliveryOption(parameters);
    }
    createDeliveryStep(parameters) {
        return this.factory.createDeliveryStep(parameters);
    }
    createLocalizedProduct(parameters) {
        return this.factory.createLocalizedProduct(parameters);
    }
    createNutrientCharacteristic(parameters) {
        return this.factory.createNutrientCharacteristic(parameters);
    }
    createOffer(parameters) {
        return this.factory.createOffer(parameters);
    }
    createOpeningHoursSpecification(parameters) {
        return this.factory.createOpeningHoursSpecification(parameters);
    }
    createOrder(parameters) {
        return this.factory.createOrder(parameters);
    }
    createOrderLine(parameters) {
        return this.factory.createOrderLine(parameters);
    }
    createOrganization(parameters) {
        return this.factory.createOrganization(parameters);
    }
    createPaymentMethod(parameters) {
        return this.factory.createPaymentMethod(parameters);
    }
    createPerson(parameters) {
        return this.factory.createPerson(parameters);
    }
    createPhoneNumber(parameters) {
        return this.factory.createPhoneNumber(parameters);
    }
    createPhysicalCharacteristic(parameters) {
        return this.factory.createPhysicalCharacteristic(parameters);
    }
    createPhysicalPlace(parameters) {
        return this.factory.createPhysicalPlace(parameters);
    }
    createPhysicalProduct(parameters) {
        return this.factory.createPhysicalProduct(parameters);
    }
    createPickupOption(parameters) {
        return this.factory.createPickupOption(parameters);
    }
    createPickUpStep(parameters) {
        return this.factory.createPickUpStep(parameters);
    }
    createPlannedConsumptionFlow(parameters) {
        return this.factory.createPlannedConsumptionFlow(parameters);
    }
    createPlannedLocalConsumptionFlow(parameters) {
        return this.factory.createPlannedLocalConsumptionFlow(parameters);
    }
    createPlannedLocalProductionFlow(parameters) {
        return this.factory.createPlannedLocalProductionFlow(parameters);
    }
    createPlannedLocalTransformation(parameters) {
        return this.factory.createPlannedLocalTransformation(parameters);
    }
    createPlannedProductionFlow(parameters) {
        return this.factory.createPlannedProductionFlow(parameters);
    }
    createPlannedTransformation(parameters) {
        return this.factory.createPlannedTransformation(parameters);
    }
    createPrice(parameters) {
        return this.factory.createPrice(parameters);
    }
    createProductBatch(parameters) {
        return this.factory.createProductBatch(parameters);
    }
    createProductOption(parameters) {
        return this.factory.createProductOption(parameters);
    }
    createProductOptionValue(parameters) {
        return this.factory.createProductOptionValue(parameters);
    }
    createQuantity(parameters) {
        return this.factory.createQuantity(parameters);
    }
    createRealizedConsumptionFlow(parameters) {
        return this.factory.createRealizedConsumptionFlow(parameters);
    }
    createRealizedProductionFlow(parameters) {
        return this.factory.createRealizedProductionFlow(parameters);
    }
    createRealizedTransformation(parameters) {
        return this.factory.createRealizedTransformation(parameters);
    }
    createRealStock(parameters) {
        return this.factory.createRealStock(parameters);
    }
    createRoute(parameters) {
        return this.factory.createRoute(parameters);
    }
    createSaleSession(parameters) {
        return this.factory.createSaleSession(parameters);
    }
    createSocialMedia(parameters) {
        return this.factory.createSocialMedia(parameters);
    }
    createSuppliedProduct(parameters) {
        return this.factory.createSuppliedProduct(parameters);
    }
    createTechnicalProduct(parameters) {
        return this.factory.createTechnicalProduct(parameters);
    }
    createTemplateSaleSession(parameters) {
        return this.factory.createTemplateSaleSession(parameters);
    }
    createTheoreticalStock(parameters) {
        return this.factory.createTheoreticalStock(parameters);
    }
    createVariant(parameters) {
        return this.factory.createVariant(parameters);
    }
    createVariantCharacteristic(parameters) {
        return this.factory.createVariantCharacteristic(parameters);
    }
    createVirtualPlace(parameters) {
        return this.factory.createVirtualPlace(parameters);
    }
    export(objects, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const exporter = (options === null || options === void 0 ? void 0 : options.exporter) ? options.exporter : this.exporter;
            return exporter.export(objects, {
                inputContext: options === null || options === void 0 ? void 0 : options.inputContext,
                outputContext: options === null || options === void 0 ? void 0 : options.outputContext
            });
        });
    }
    getSemantizer() {
        return this.semantizer;
    }
    getDefaultFactory() {
        return this.factory;
    }
    import(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const importer = (options === null || options === void 0 ? void 0 : options.importer) ? options.importer : this.importer;
                    const factory = (options === null || options === void 0 ? void 0 : options.factory) ? options.factory : this.factory;
                    let results = new Array();
                    const datasets = yield importer.import(data, { context: options === null || options === void 0 ? void 0 : options.context });
                    datasets.forEach(dataset => {
                        try {
                            const semanticObject = factory.createFromRdfDataset(dataset);
                            if (semanticObject) {
                                results.push(semanticObject);
                                if ((options === null || options === void 0 ? void 0 : options.doNotStore) === undefined || options.doNotStore !== false)
                                    this.store(semanticObject);
                                if (options && options.callbacks)
                                    options.callbacks.forEach((callback) => callback(semanticObject));
                            }
                        }
                        catch (e) { }
                    });
                    if (options) {
                        if (options.only)
                            results = results.filter(r => r.isSemanticTypeOf(options.only));
                        if (options.limit && options.limit < results.length)
                            results = results.slice(0, options.limit);
                    }
                    resolve(results);
                }
                catch (error) {
                    reject(error);
                }
            }));
        });
    }
    importOne(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = Object.assign(Object.assign({}, options), { limit: 1 });
            const results = yield this.import(data, opts);
            return results.length > 0 ? results[0] : undefined;
        });
    }
    importOneTyped(data, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = Object.assign(Object.assign({}, options), { limit: 1 });
            const results = yield this.import(data, opts);
            return results.length > 0 ? results[0] : undefined;
        });
    }
    // TODO: manage options overriding.
    importThesaurus(data, prefix, options) {
        return __awaiter(this, void 0, void 0, function* () {
            let conceptScheme = undefined;
            const concepts = new Map();
            const context = data["@context"];
            const skos = "http://www.w3.org/2004/02/skos/core#";
            const skosConceptScheme = skos + "ConceptScheme";
            const skosHasTopConcept = skos + "hasTopConcept";
            const skosNarrower = skos + "narrower";
            const callback = (semanticObject) => {
                if (semanticObject.isSemanticTypeOf(skosConceptScheme))
                    conceptScheme = semanticObject;
                else
                    concepts.set(semanticObject.getSemanticId(), semanticObject);
            };
            yield this.import(data, { context: context, callbacks: [callback] });
            if (!conceptScheme)
                throw new Error("Can't find the SKOS ConceptScheme in the imported thesaurus.");
            const setChildren = (parent) => {
                const narrowers = parent.getSemanticPropertyAll(skosNarrower);
                narrowers.forEach((narrower) => {
                    const expandedNarrower = this.getSemantizer().expand(narrower);
                    const name = expandedNarrower.split(prefix)[1].replace('-', '_').toUpperCase();
                    const concept = concepts.get(expandedNarrower);
                    if (concept) {
                        // @ts-ignore
                        parent[name] = concept;
                        setChildren(concept);
                    }
                });
            };
            // @ts-ignore: if the conceptScheme does not exist, an exception should have be already throwned
            conceptScheme.getSemanticPropertyAll(skosHasTopConcept).forEach((topConcept) => {
                const expandedTopConcept = this.getSemantizer().expand(topConcept);
                //const name: string = topConcept.split(prefix)[1].replace('-', '_').toUpperCase();
                const name = expandedTopConcept.split(prefix)[1].replace('-', '_').toUpperCase();
                const concept = concepts.get(expandedTopConcept);
                if (!concept)
                    throw new Error("The thesaurus top concept " + topConcept + " was not found.");
                // @ts-ignore
                conceptScheme[name] = concept;
                setChildren(concept);
            });
            return conceptScheme;
        });
    }
    loadFacets(facets) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefix = "http://w3id.org/dfc/taxonomies/v2.0.0/facets.rdf#";
            this.FACETS = yield this.importThesaurus(facets, prefix);
        });
    }
    loadMeasures(measures) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefix = "http://w3id.org/dfc/taxonomies/v2.0.0/measures.rdf#";
            this.MEASURES = yield this.importThesaurus(measures, prefix);
        });
    }
    loadProductTypes(productTypes) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefix = "http://w3id.org/dfc/taxonomies/v2.0.0/productTypes.rdf#";
            this.PRODUCT_TYPES = yield this.importThesaurus(productTypes, prefix);
        });
    }
    loadVocabulary(vocabulary) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefix = "http://w3id.org/dfc/taxonomies/v2.0.0/vocabulary.rdf#";
            this.VOCABULARY = yield this.importThesaurus(vocabulary, prefix);
        });
    }
    loadCountries(countries) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefix = "http://publications.europa.eu/resource/authority/country/";
            this.COUNTRIES = yield this.importThesaurus(countries, prefix);
        });
    }
    fetch(semanticObject, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const store = (options === null || options === void 0 ? void 0 : options.store) ? options.store : this.storeObject;
            const semanticObjectId = this.getSemantizer().expand(semanticObject);
            if (!store.has(semanticObjectId)) {
                const fetchFunction = (options === null || options === void 0 ? void 0 : options.fetch) ? options.fetch : this.fetchFunction;
                const importer = (options === null || options === void 0 ? void 0 : options.importer) ? { importer: options.importer } : {};
                const response = yield fetchFunction(semanticObjectId);
                if (response.ok) {
                    const semanticObjects = yield this.import(yield response.text(), importer);
                    store.setAll(semanticObjects);
                    return semanticObjects.find(semanticObject => semanticObject.getSemanticId() === semanticObjectId);
                }
                else {
                    return Promise.reject(response.status);
                }
            }
            return store.get(semanticObjectId);
        });
    }
    setDefaultFactory(factory) {
        this.factory = factory;
    }
    setDefaultFetchFunction(fetch) {
        this.fetchFunction = fetch;
    }
    setDefaultExporter(exporter) {
        this.exporter = exporter;
    }
    setDefaultImporter(importer) {
        this.importer = importer;
    }
    setDefaultStore(store) {
        this.storeObject = store;
    }
    store(semanticObject) {
        this.storeObject.set(semanticObject);
    }
    removeFromStore(semanticObjectId) {
        this.storeObject.remove(semanticObjectId);
    }
}
//# sourceMappingURL=Connector.js.map