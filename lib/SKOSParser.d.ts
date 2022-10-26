import { Semanticable } from "@virtual-assembly/semantizer";
import ISKOSConcept from "./ISKOSConcept";
export default class SKOSParser {
    private results;
    private skosConcepts;
    private rootElements;
    private broaders;
    private skosConceptCallbacks;
    constructor();
    private init;
    addSKOSConceptCallback(callback: Function): void;
    parse(data: any): any;
    private setResults;
    protected createSKOSConcept(element: any): (ISKOSConcept & Semanticable);
    protected getValueWithoutPrefix(property: string): string;
}
//# sourceMappingURL=SKOSParser.d.ts.map