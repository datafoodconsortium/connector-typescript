import ICustomerCategory from "./ICustomerCategory.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"




export default class CustomerCategory extends SemanticObject implements ICustomerCategory {

	private name: string;
	private description: string;

	constructor(name: string, description: string) {
		super();
		this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#CustomerCategory");
		this.name = name;
		this.description = description;
		
		this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#name", () => this.getName());
		this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#description", () => this.getDescription());
	}
	

	getDescription(): string {
		return this.description;
	}
	

	setDescription(description: string): void {
		this.description = description;
	}
	
	getName(): string {
		return this.name;
	}
	

	setName(name: string): void {
		this.name = name;
	}
	

}
