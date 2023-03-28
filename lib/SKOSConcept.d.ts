import ISKOSConcept from "./ISKOSConcept.js";
import ISKOSLabel from "./ISKOSLabel.js";
import ISKOSConceptScheme from "./ISKOSConceptScheme.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class SKOSConcept extends SemanticObject implements ISKOSConcept {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        doNotStore?: boolean;
        semanticId?: string;
        other?: Semanticable;
    });
    getBroader(options?: IGetterOptions): Promise<Array<ISKOSConcept>>;
    removeBroader(broader: ISKOSConcept): void;
    addNarrower(narrower: ISKOSConcept): void;
    addBroader(broader: ISKOSConcept): void;
    removeScheme(scheme: ISKOSConceptScheme): void;
    getNarrower(options?: IGetterOptions): Promise<Array<ISKOSConcept>>;
    addPrefLabel(prefLabel: ISKOSLabel): void;
    getPrefLabel(options?: IGetterOptions): Promise<Array<ISKOSLabel>>;
    removePrefLabel(prefLabel: ISKOSLabel): void;
    addScheme(scheme: ISKOSConceptScheme): void;
    removeNarrower(narrower: ISKOSConcept): void;
    getScheme(options?: IGetterOptions): Promise<Array<ISKOSConceptScheme>>;
}
//# sourceMappingURL=SKOSConcept.d.ts.map