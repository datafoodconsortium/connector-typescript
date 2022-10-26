import { SemanticObject } from "@virtual-assembly/semantizer";
export default class CatalogItem extends SemanticObject {
    constructor(product) {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#CatalogItem");
        this.product = product;
        this.sku = "";
        this.stockLimitation = 0.0;
        this.offers = [];
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#references", () => this.getOfferedProduct());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#sku", () => this.getSku());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#stockLimitation", () => this.getStockLimitation());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#offeredThrough", () => this.getOfferers());
    }
    getSku() {
        return this.sku;
    }
    getStockLimitation() {
        return this.stockLimitation;
    }
    addOffer(offer) {
        this.offers.push(offer);
    }
    getOfferedProduct() {
        return this.product;
    }
    getOfferers() {
        return this.offers.values();
    }
}
//# sourceMappingURL=CatalogItem.js.map