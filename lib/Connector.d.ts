import { Semanticable } from "@virtual-assembly/semantizer";
import ISKOSConcept from "./ISKOSConcept";
export default class Connector {
    FACETS: Array<ISKOSConcept>;
    MEASURES: Array<ISKOSConcept>;
    PRODUCT_TYPES: Array<ISKOSConcept>;
    private static instance;
    private context;
    private exporter;
    private parser;
    private constructor();
    static getInstance(): Connector;
    export(subject: Semanticable, space: number | undefined): Promise<string>;
    private loadThesaurus;
    loadFacets(data: any): void;
    loadMeasures(data: any): void;
    loadProductTypes(data: any): void;
}
//# sourceMappingURL=Connector.d.ts.map