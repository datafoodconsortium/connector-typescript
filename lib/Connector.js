var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import JsonLdSerializer from "./JsonLdSerializer.js";
import SKOSParser from "./SKOSParser.js";
export default class Connector {
    constructor() {
        this.context = {
            "dfc-b": "http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#"
        };
        this.exporter = new JsonLdSerializer(this.context);
        this.parser = new SKOSParser;
        this.FACETS = [];
        this.MEASURES = [];
        this.PRODUCT_TYPES = [];
    }
    static getInstance() {
        if (this.instance === undefined)
            this.instance = new Connector;
        return this.instance;
    }
    export(subject, space) {
        return __awaiter(this, void 0, void 0, function* () {
            this.exporter.setSpace(space);
            return yield this.exporter.process(subject);
        });
    }
    loadThesaurus(data) {
        return this.parser.parse(data[0]["@graph"]);
    }
    loadFacets(data) {
        this.FACETS = this.loadThesaurus(data);
    }
    loadMeasures(data) {
        this.MEASURES = this.loadThesaurus(data);
    }
    loadProductTypes(data) {
        this.PRODUCT_TYPES = this.loadThesaurus(data);
    }
}
Connector.instance = undefined;
//# sourceMappingURL=Connector.js.map