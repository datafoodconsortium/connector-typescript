import IOffer from "./IOffer.js"
import ICustomerCategory from "./ICustomerCategory.js"
import ICatalogItem from "./ICatalogItem.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"




export default class Offer extends SemanticObject implements IOffer {

	private price: number;
	private stockLimitation: number;
	private offeredItem: (ICatalogItem & Semanticable) | undefined;
	private offeredTo: (ICustomerCategory & Semanticable);

	constructor(offeredItem: (ICatalogItem & Semanticable), offeredTo: (ICustomerCategory & Semanticable)) {
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
	

	getStockLimitation(): number {
		return this.stockLimitation;
	}
	
	getPrice(): number {
		return this.price;
	}
	
	getOfferedItem(): (ICatalogItem & Semanticable) | undefined {
		return this.offeredItem;
	}
	

	getCustomerCategory(): (ICustomerCategory & Semanticable) {
		return this.offeredTo;
	}
	

}
