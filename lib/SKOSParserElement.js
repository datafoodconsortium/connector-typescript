export default class SKOSParserElement {
    constructor(element) {
        this.broader = new Array;
        if (element) {
            this.id = element["@id"];
            if (element["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"])
                this.type = this.extractId(element["http://www.w3.org/1999/02/22-rdf-syntax-ns#type"]);
            else if (element["@type"])
                this.type = this.extractId(element["@type"]);
            else
                this.type = "undefined";
            if (element["http://www.w3.org/2004/02/skos/core#broader"])
                for (let broader of element["http://www.w3.org/2004/02/skos/core#broader"])
                    this.broader.push(broader["@id"]);
        }
        else {
            this.id = "";
            this.type = "";
        }
    }
    extractId(data) {
        const id = data[0];
        if (id["@id"])
            return id["@id"];
        return id;
    }
    hasBroader() {
        return this.broader.length > 0;
    }
    isConcept() {
        return this.type === "http://www.w3.org/2004/02/skos/core#Concept" || this.type === "skos:Concept";
    }
    isCollection() {
        return this.type === "http://www.w3.org/2004/02/skos/core#Collection" || this.type === "skos:Collection";
    }
}
//# sourceMappingURL=SKOSParserElement.js.map