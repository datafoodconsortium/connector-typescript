import IDefinedProduct from "./IDefinedProduct.js"
import IOffer from "./IOffer.js"
import ICatalogItem from "./ICatalogItem.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"



export default class CatalogItem extends SemanticObject implements ICatalogItem {

	private product: (IDefinedProduct & Semanticable);
	private sku: string;
	private stockLimitation: number;
	private offers: (IOffer & Semanticable)[];

	constructor(product: (IDefinedProduct & Semanticable)) {
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
	

	getSku(): string {
		return this.sku;
	}
	

	getStockLimitation(): number {
		return this.stockLimitation;
	}
	
	addOffer(offer: (IOffer & Semanticable)): void {
		this.offers.push(offer);
	}
	

	getOfferedProduct(): (IDefinedProduct & Semanticable) {
		return this.product;
	}
	

	getOfferers(): IterableIterator<(IOffer & Semanticable)> {
		return this.offers.values();
	}
	

}
