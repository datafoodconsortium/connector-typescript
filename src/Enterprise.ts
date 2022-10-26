import Agent from "./Agent.js"
import IEnterprise from "./IEnterprise.js"
import ICustomerCategory from "./ICustomerCategory.js"
import SuppliedProduct from "./SuppliedProduct.js"
import ICatalogItem from "./ICatalogItem.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"






export default class Enterprise extends Agent implements IEnterprise {

	private name: string;
	private description: string;
	private vatNumber: string;
	private customerCategories: (ICustomerCategory & Semanticable)[];
	private suppliedProducts: (SuppliedProduct & Semanticable)[];
	private catalogItems: (ICatalogItem & Semanticable)[];

	constructor(name: string) {
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
	

	setVatNumber(vatNumber: string): void {
		this.vatNumber = vatNumber;
	}
	

	getVatNumber(): string {
		return this.vatNumber;
	}
	
	getDescription(): string {
		return this.description;
	}
	

	setDescription(description: string): void {
		this.description = description;
	}
	
	addCatalogItem(catalogItem: (ICatalogItem & Semanticable)): void {
		this.catalogItems.push(catalogItem);
	}
	

	addSupplyProduct(suppliedProduct: (SuppliedProduct & Semanticable)): void {
		this.suppliedProducts.push(suppliedProduct);
	}
	

	getSuppliedProducts(): IterableIterator<(SuppliedProduct & Semanticable)> {
		return this.suppliedProducts.values();
	}
	

	getCatalogItems(): IterableIterator<(ICatalogItem & Semanticable)> {
		return this.catalogItems.values();
	}
	
	getName(): string {
		return this.name;
	}
	

	setName(name: string): void {
		this.name = name;
	}
	
	addCustomerCategory(customerCategory: (ICustomerCategory & Semanticable)): void {
		this.customerCategories.push(customerCategory);
	}
	

	getCustomerCategories(): IterableIterator<(ICustomerCategory & Semanticable)> {
		return this.customerCategories.values();
	}
	

}
