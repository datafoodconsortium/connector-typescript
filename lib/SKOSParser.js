import SKOSConcept from "./SKOSConcept.js";
import SKOSParserElement from "./SKOSParserElement.js";
export default class SKOSParser {
    constructor() {
        this.results = {};
        this.skosConcepts = new Map;
        this.rootElements = new Array;
        this.broaders = new Map;
        this.skosConceptCallbacks = new Array;
    }
    init() {
        this.results = {};
        this.skosConcepts = new Map;
        this.rootElements = new Array;
        this.broaders = new Map;
    }
    addSKOSConceptCallback(callback) {
        this.skosConceptCallbacks.push(callback);
    }
    parse(data) {
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
                            this.broaders.set(broaderId, new Array);
                        this.broaders.set(broaderId, [...this.broaders.get(broaderId), current.id]);
                    }
                }
                // No broader, save the concept to the root
                else
                    this.rootElements.push(current.id);
            }
        }
        for (let rootElementId of this.rootElements) {
            this.setResults(this.results, rootElementId);
        }
        return this.results;
    }
    setResults(parent, id) {
        const name = this.getValueWithoutPrefix(id);
        if (!parent[name])
            parent[name] = {};
        // Leaf concepts, stop the process
        if (!this.broaders.has(id)) {
            parent[name] = this.skosConcepts.get(id);
            return;
        }
        for (let narrower of this.broaders.get(id)) {
            const childName = this.getValueWithoutPrefix(narrower);
            parent[name][childName] = {};
            this.setResults(parent[name], narrower); // recursive call
        }
    }
    createSKOSConcept(element) {
        let skosConcept = new SKOSConcept;
        skosConcept.setSemanticId(element.id);
        skosConcept.setSemanticType(element.type);
        return skosConcept;
    }
    getValueWithoutPrefix(property) {
        let name = 'undefined';
        if (!property.includes('http') && property.includes(':'))
            name = property.split(':')[1];
        else if (property.includes('#'))
            name = property.split('#')[1];
        return name.replace('-', '_').toUpperCase();
    }
}
//# sourceMappingURL=SKOSParser.js.map