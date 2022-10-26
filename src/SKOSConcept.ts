import ISKOSLabel from "./ISKOSLabel.js"
import ISKOSConcept from "./ISKOSConcept.js"
import ISKOSConceptScheme from "./ISKOSConceptScheme.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"

export default class SKOSConcept extends SemanticObject implements ISKOSConcept {

	private broaders: (ISKOSConcept & Semanticable)[];
	private schemes: (ISKOSConceptScheme & Semanticable)[];
	private narrowers: (ISKOSConcept & Semanticable)[];
	private prefLabels: (ISKOSLabel & Semanticable)[];

	constructor() {
		super();
		this.setSemanticType("http://www.w3.org/2004/02/skos/core#Concept");
		
		this.broaders = [];
		this.schemes = [];
		this.narrowers = [];
		this.prefLabels = [];
		this.registerSemanticProperty("http://www.w3.org/2004/02/skos/core#broader", () => this.getBroader());
		this.registerSemanticProperty("http://www.w3.org/2004/02/skos/core#inScheme", () => this.getScheme());
		this.registerSemanticProperty("http://www.w3.org/2004/02/skos/core#narrower", () => this.getNarrower());
		this.registerSemanticProperty("http://www.w3.org/2004/02/skos/core#prefLabel", () => this.getPrefLabel());
	}
	

	getNarrower(): IterableIterator<(ISKOSConcept & Semanticable)> {
		return this.narrowers.values();
	}
	

	getBroader(): IterableIterator<(ISKOSConcept & Semanticable)> {
		return this.broaders.values();
	}
	

	removeScheme(scheme: (ISKOSConceptScheme & Semanticable)): void {
	}
	

	removeNarrower(narrower: (ISKOSConcept & Semanticable)): void {
	}
	

	getPrefLabel(): IterableIterator<(ISKOSLabel & Semanticable)> {
		return this.prefLabels.values();
	}
	

	addBroader(broader: (ISKOSConcept & Semanticable)): void {
		this.broaders.push(broader);
	}
	

	addPrefLabel(prefLabel: (ISKOSLabel & Semanticable)): void {
		this.prefLabels.push(prefLabel);
	}
	

	getScheme(): IterableIterator<(ISKOSConceptScheme & Semanticable)> {
		return this.schemes.values();
	}
	

	removePrefLabel(prefLabel: (ISKOSLabel & Semanticable)): void {
	}
	

	removeBroader(broader: (ISKOSConcept & Semanticable)): void {
	}
	

	addScheme(scheme: (ISKOSConceptScheme & Semanticable)): void {
		this.schemes.push(scheme);
	}
	

	addNarrower(narrower: (ISKOSConcept & Semanticable)): void {
		this.narrowers.push(narrower);
	}
	

}
