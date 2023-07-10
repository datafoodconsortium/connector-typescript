var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ConnectorExporterJsonldStream from "./ConnectorExporterJsonldStream.js";
import ConnectorImporterJsonldStream from "./ConnectorImporterJsonldStream.js";
import ConnectorStoreMap from "./ConnectorStoreMap.js";
import context from "./context.js";
import ConnectorFactory from "./ConnectorFactory.js";
export default class Connector {
    constructor() {
        this.storeObject = new ConnectorStoreMap();
        this.fetchFunction = (semanticId) => __awaiter(this, void 0, void 0, function* () { return (yield fetch(semanticId)); });
        this.factory = new ConnectorFactory(this);
        this.importer = new ConnectorImporterJsonldStream({ context: context });
        const outputContext = "https://www.datafoodconsortium.org";
        this.exporter = new ConnectorExporterJsonldStream(context, outputContext);
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
    createCustomerCategory(parameters) {
        return this.factory.createCustomerCategory(parameters);
    }
    createEnterprise(parameters) {
        return this.factory.createEnterprise(parameters);
    }
    createNutrientCharacteristic(parameters) {
        return this.factory.createNutrientCharacteristic(parameters);
    }
    createOffer(parameters) {
        return this.factory.createOffer(parameters);
    }
    createOrder(parameters) {
        return this.factory.createOrder(parameters);
    }
    createOrderLine(parameters) {
        return this.factory.createOrderLine(parameters);
    }
    createPerson(parameters) {
        return this.factory.createPerson(parameters);
    }
    createPhysicalCharacteristic(parameters) {
        return this.factory.createPhysicalCharacteristic(parameters);
    }
    createPrice(parameters) {
        return this.factory.createPrice(parameters);
    }
    createQuantity(parameters) {
        return this.factory.createQuantity(parameters);
    }
    createSaleSession(parameters) {
        return this.factory.createSaleSession(parameters);
    }
    createSuppliedProduct(parameters) {
        return this.factory.createSuppliedProduct(parameters);
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
                        const semanticObject = factory.createFromRdfDataset(dataset);
                        if (semanticObject) {
                            results.push(semanticObject);
                            if ((options === null || options === void 0 ? void 0 : options.doNotStore) === undefined || options.doNotStore !== false)
                                this.store(semanticObject);
                            if (options && options.callbacks)
                                options.callbacks.forEach((callback) => callback(semanticObject));
                        }
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
                    const name = narrower.split(prefix)[1].replace('-', '_').toUpperCase();
                    const concept = concepts.get(narrower);
                    if (concept) {
                        // @ts-ignore
                        parent[name] = concept;
                        setChildren(concept);
                    }
                });
            };
            // @ts-ignore: if the conceptScheme does not exist, an exception should have be already throwned
            conceptScheme.getSemanticPropertyAll(skosHasTopConcept).forEach((topConcept) => {
                const name = topConcept.split(prefix)[1].replace('-', '_').toUpperCase();
                const concept = concepts.get(topConcept);
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
            const prefix = "https://github.com/datafoodconsortium/taxonomies/releases/latest/download/facets.rdf#";
            this.FACETS = yield this.importThesaurus(facets, prefix);
        });
    }
    loadMeasures(measures) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefix = "https://github.com/datafoodconsortium/taxonomies/releases/latest/download/measures.rdf#";
            this.MEASURES = yield this.importThesaurus(measures, prefix);
        });
    }
    loadProductTypes(productTypes) {
        return __awaiter(this, void 0, void 0, function* () {
            const prefix = "https://github.com/datafoodconsortium/taxonomies/releases/latest/download/productTypes.rdf#";
            this.PRODUCT_TYPES = yield this.importThesaurus(productTypes, prefix);
        });
    }
    fetch(semanticObjectId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const store = (options === null || options === void 0 ? void 0 : options.store) ? options.store : this.storeObject;
            if (!store.has(semanticObjectId)) {
                const fetchFunction = (options === null || options === void 0 ? void 0 : options.fetch) ? options.fetch : this.fetchFunction;
                const importer = (options === null || options === void 0 ? void 0 : options.importer) ? { importer: options.importer } : {};
                const document = yield fetchFunction(semanticObjectId);
                const semanticObjects = yield this.import(yield document.text(), importer);
                store.setAll(semanticObjects);
                return semanticObjects.find(semanticObject => semanticObject.getSemanticId() === semanticObjectId);
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
}
//# sourceMappingURL=Connector.js.map