import Agent from "./Agent.js"
import Onboardable from "./Onboardable.js"
import IPerson from "./IPerson.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"



export default class Person extends Agent implements IPerson {

	private firstName: string;
	private lastName: string;
	private affiliatedOrganizations: (Onboardable & Semanticable)[];

	constructor(firstName: string, lastName: string) {
		super();
		this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#Person");
		this.firstName = firstName;
		this.lastName = lastName;
		this.affiliatedOrganizations = [];
		this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#firstName", () => this.getFirstName());
		this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#familyName", () => this.getLastName());
		this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#affiliates", () => this.getAffiliatedOrganizations());
	}
	

	affiliateTo(organization: (Onboardable & Semanticable)): void {
		this.affiliatedOrganizations.push(organization);
	}
	

	leaveAffiliatedOrganization(organization: (Onboardable & Semanticable)): void {
	}
	

	getAffiliatedOrganizations(): IterableIterator<(Onboardable & Semanticable)> {
		return this.affiliatedOrganizations.values();
	}
	
	setFirstName(firstName: string): void {
		this.firstName = firstName;
	}
	

	setLastName(lastName: string): void {
		this.lastName = lastName;
	}
	

	getFirstName(): string {
		return this.firstName;
	}
	

	getLastName(): string {
		return this.lastName;
	}
	

}
