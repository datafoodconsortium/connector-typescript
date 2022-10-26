import { Semanticable } from "@virtual-assembly/semantizer";
import ISKOSConcept from "./ISKOSConcept";
import SKOSConcept from "./SKOSConcept.js";
import SKOSParserElement from "./SKOSParserElement.js";

export default class SKOSParser {

    private results: any;
    private skosConcepts: Map<string, ISKOSConcept & Semanticable>;
    private rootElements: Array<string>;
    private broaders: Map<string, Array<string>>;
    private skosConceptCallbacks: Array<Function>;

    constructor() {
        this.results = {};
        this.skosConcepts = new Map<string, ISKOSConcept & Semanticable>;
        this.rootElements = new Array<string>;
        this.broaders = new Map<string, Array<string>>;
        this.skosConceptCallbacks = new Array<Function>;
    }

    private init(): void {
        this.results = {};
        this.skosConcepts = new Map<string, ISKOSConcept & Semanticable>;
        this.rootElements = new Array<string>;
        this.broaders = new Map<string, Array<string>>;
    }

    public addSKOSConceptCallback(callback: Function): void {
        this.skosConceptCallbacks.push(callback);
    }

    public parse(data: any): any {
        this.init();

        for (let element of data) {
            let current = new SKOSParserElement(element);
            
            if (current.isConcept() || current.isCollection()) {
                if (!this.skosConcepts.has(current.id)) {
                    const concept = this.createSKOSConcept(current);
                    this.skosConcepts.set(current.id, concept);

                    // Notify obsevers
                    for (let callback of this.skosConceptCallbacks)
                        callback(concept);
                }
                
                if (current.hasBroader()) {
                    for (let broaderId of current.broader) {
                        if (!this.broaders.has(broaderId))
                        this.broaders.set(broaderId, new Array<string>);
                        this.broaders.set(broaderId, [...this.broaders.get(broaderId)!, current.id]);
                    } 
                }
                
                // No broader, save the concept to the root
                else this.rootElements.push(current.id);
            }
        }
        
        for (let rootElementId of this.rootElements) {
            this.setResults(this.results, rootElementId);
        }

        return this.results;
    }

    private setResults(parent: any, id: string): void {
        const name: string = this.getValueWithoutPrefix(id);

        if (!parent[name])
            parent[name] = {};

        // Leaf concepts, stop the process
        if (!this.broaders.has(id)) {
            parent[name] = this.skosConcepts.get(id);
            return;
        }

        for (let narrower of this.broaders.get(id)!) {
            const childName: string = this.getValueWithoutPrefix(narrower);
            parent[name][childName] = {};
            this.setResults(parent[name], narrower); // recursive call
        }
    }

    protected createSKOSConcept(element: any): (ISKOSConcept & Semanticable) {
        let skosConcept = new SKOSConcept;
        skosConcept.setSemanticId(element.id);
        skosConcept.setSemanticType(element.type);
        return skosConcept;
    }

    protected getValueWithoutPrefix(property: string): string {
        let name: string = 'undefined';
        if (!property.includes('http') && property.includes(':')) name = property.split(':')[1];
        else if (property.includes('#')) name = property.split('#')[1];
        return name.replace('-', '_').toUpperCase();
    }

}