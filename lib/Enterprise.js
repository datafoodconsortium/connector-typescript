import Agent from "./Agent.js";
export default class Enterprise extends Agent {
    constructor(name) {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Enterprise");
        this.name = name;
        this.description = "";
        this.vatNumber = "";
        this.customerCategories = [];
        this.suppliedProducts = [];
        this.catalogItems = [];
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasName", () => this.getName());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasDescription", () => this.getDescription());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#VATnumber", () => this.getVatNumber());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#defines", () => this.getCustomerCategories());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#supplies", () => this.getSuppliedProducts());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#manages", () => this.getCatalogItems());
    }
    setVatNumber(vatNumber) {
        this.vatNumber = vatNumber;
    }
    getVatNumber() {
        return this.vatNumber;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    addCatalogItem(catalogItem) {
        this.catalogItems.push(catalogItem);
    }
    addSupplyProduct(suppliedProduct) {
        this.suppliedProducts.push(suppliedProduct);
    }
    getSuppliedProducts() {
        return this.suppliedProducts.values();
    }
    getCatalogItems() {
        return this.catalogItems.values();
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    addCustomerCategory(customerCategory) {
        this.customerCategories.push(customerCategory);
    }
    getCustomerCategories() {
        return this.customerCategories.values();
    }
}
//# sourceMappingURL=Enterprise.js.map