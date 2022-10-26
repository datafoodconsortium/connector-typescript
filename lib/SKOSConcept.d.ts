import ISKOSLabel from "./ISKOSLabel.js";
import ISKOSConcept from "./ISKOSConcept.js";
import ISKOSConceptScheme from "./ISKOSConceptScheme.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
export default class SKOSConcept extends SemanticObject implements ISKOSConcept {
    private broaders;
    private schemes;
    private narrowers;
    private prefLabels;
    constructor();
    getNarrower(): IterableIterator<(ISKOSConcept & Semanticable)>;
    getBroader(): IterableIterator<(ISKOSConcept & Semanticable)>;
    removeScheme(scheme: (ISKOSConceptScheme & Semanticable)): void;
    removeNarrower(narrower: (ISKOSConcept & Semanticable)): void;
    getPrefLabel(): IterableIterator<(ISKOSLabel & Semanticable)>;
    addBroader(broader: (ISKOSConcept & Semanticable)): void;
    addPrefLabel(prefLabel: (ISKOSLabel & Semanticable)): void;
    getScheme(): IterableIterator<(ISKOSConceptScheme & Semanticable)>;
    removePrefLabel(prefLabel: (ISKOSLabel & Semanticable)): void;
    removeBroader(broader: (ISKOSConcept & Semanticable)): void;
    addScheme(scheme: (ISKOSConceptScheme & Semanticable)): void;
    addNarrower(narrower: (ISKOSConcept & Semanticable)): void;
}
//# sourceMappingURL=SKOSConcept.d.ts.map