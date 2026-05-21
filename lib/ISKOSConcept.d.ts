import ISKOSConceptScheme from "./ISKOSConceptScheme.js";
import ISKOSLabel from "./ISKOSLabel.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ISKOSConcept extends Semanticable {
    addBroader(broader: ISKOSConcept): void;
    addScheme(scheme: ISKOSConceptScheme): void;
    addNarrower(narrower: ISKOSConcept): void;
    addPrefLabel(prefLabel: ISKOSLabel): void;
    getBroader(): Promise<ISKOSConcept[]>;
    getScheme(): Promise<ISKOSConceptScheme[]>;
    getNarrower(): Promise<ISKOSConcept[]>;
    getPrefLabel(): Promise<ISKOSLabel[]>;
    removeBroader(broader: ISKOSConcept): void;
    removeScheme(scheme: ISKOSConceptScheme): void;
    removeNarrower(narrower: ISKOSConcept): void;
    removePrefLabel(prefLabel: ISKOSLabel): void;
}
//# sourceMappingURL=ISKOSConcept.d.ts.map