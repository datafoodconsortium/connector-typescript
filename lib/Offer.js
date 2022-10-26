import { SemanticObject } from "@virtual-assembly/semantizer";
export default class Offer extends SemanticObject {
    constructor(offeredItem, offeredTo) {
        super();
        this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Offer");
        this.offeredItem = offeredItem;
        this.offeredTo = offeredTo;
        this.price = 0.0;
        this.stockLimitation = 0.0;
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#price", () => this.getPrice());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#stockLimitation", () => this.getStockLimitation());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#offeredItem", () => this.getOfferedItem());
        this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#offeredTo", () => this.getCustomerCategory());
    }
    getStockLimitation() {
        return this.stockLimitation;
    }
    getPrice() {
        return this.price;
    }
    getOfferedItem() {
        return this.offeredItem;
    }
    getCustomerCategory() {
        return this.offeredTo;
    }
}
//# sourceMappingURL=Offer.js.map