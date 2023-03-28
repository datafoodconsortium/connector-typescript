import ISKOSLabel from "./ISKOSLabel.js"
import ISKOSConceptScheme from "./ISKOSConceptScheme.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface ISKOSConcept extends Semanticable{

	addBroader(broader: ISKOSConcept): void;
	addScheme(scheme: ISKOSConceptScheme): void;
	addNarrower(narrower: ISKOSConcept): void;
	addPrefLabel(prefLabel: ISKOSLabel): void;
	getBroader(): Promise<Array<ISKOSConcept>>
	;
	getScheme(): Promise<Array<ISKOSConceptScheme>>
	;
	getNarrower(): Promise<Array<ISKOSConcept>>
	;
	getPrefLabel(): Promise<Array<ISKOSLabel>>
	;
	removeBroader(broader: ISKOSConcept): void;
	removeScheme(scheme: ISKOSConceptScheme): void;
	removeNarrower(narrower: ISKOSConcept): void;
	removePrefLabel(prefLabel: ISKOSLabel): void;

}
