import ISKOSConceptScheme from "./ISKOSConceptScheme.js";
import ISKOSLabel from "./ISKOSLabel.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ISKOSConcept {
    addBroader(broader: (ISKOSConcept & Semanticable)): void;
    addScheme(scheme: (ISKOSConceptScheme & Semanticable)): void;
    addNarrower(narrower: (ISKOSConcept & Semanticable)): void;
    addPrefLabel(prefLabel: (ISKOSLabel & Semanticable)): void;
    getBroader(): IterableIterator<(ISKOSConcept & Semanticable)>;
    getScheme(): IterableIterator<(ISKOSConceptScheme & Semanticable)>;
    getNarrower(): IterableIterator<(ISKOSConcept & Semanticable)>;
    getPrefLabel(): IterableIterator<(ISKOSLabel & Semanticable)>;
    removeBroader(broader: (ISKOSConcept & Semanticable)): void;
    removeScheme(scheme: (ISKOSConceptScheme & Semanticable)): void;
    removeNarrower(narrower: (ISKOSConcept & Semanticable)): void;
    removePrefLabel(prefLabel: (ISKOSLabel & Semanticable)): void;
}
//# sourceMappingURL=ISKOSConcept.d.ts.map