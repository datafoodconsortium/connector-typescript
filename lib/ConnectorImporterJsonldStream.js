var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { JsonLdParser } from "jsonld-streaming-parser";
import { Readable } from 'readable-stream';
import datasetFactory from 'rdf-ext';
import { Observable } from "./observer.js";
export default class ConnectorImporterJsonldStream extends Observable {
    // TODO: add the optional parameters of the JsonLdParser class.
    constructor(parameters) {
        super();
        this.context = parameters === null || parameters === void 0 ? void 0 : parameters.context;
        this.documentLoader = parameters === null || parameters === void 0 ? void 0 : parameters.documentLoader;
    }
    import(json, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const context = (options === null || options === void 0 ? void 0 : options.context) ? options.context : this.context;
            const parser = new JsonLdParser({ context: context, documentLoader: this.documentLoader });
            // imported datasets results.
            const datasets = new Array();
            // imported blank nodes.
            const blankNodes = new Array();
            // Map<blank node name, index in the blankNodes array>.
            const blankNodesIndex = new Map();
            // Holds the dataset(s) which contain quad(s) pointing to blank node(s).
            const datasetsWithMissingBlankNodes = new Map();
            // Make a stream with the data to import.
            const input = new Readable();
            input.push(json);
            input.push(null);
            // Start the import processing.
            const output = parser.import(input);
            // On each quad imported we fill the appropriate datasets.
            // If the quad is a blank node we add it to the blankNodes array, 
            // otherwise we add it to the datasets array.
            output.on('data', (quad) => {
                const subject = quad.subject.value;
                const isBlankNode = (quad.subject.termType === "BlankNode");
                // Defines the array to add the quad into.
                const source = isBlankNode ? blankNodes : datasets;
                // We try to find the existing dataset on which this quad belongs to.
                let dataset = source.find((dataset) => dataset.some((quad) => quad.subject.value === subject));
                // If this is the first quad of its dataset, we create the dataset.
                if (!dataset) {
                    dataset = datasetFactory.dataset();
                    const length = source.push(dataset);
                    // For a blank node we also keep a track to it associating 
                    // its name to its index in the blankNodes array. This will 
                    // be used to attach the blank nodes at the end of the process.
                    if (isBlankNode)
                        blankNodesIndex.set(subject, length - 1);
                }
                // At this point we have a valid dataset to add the quad to.
                dataset.add(quad);
                // If the quad refers to a blank node, we keep a track of this dataset 
                // so the blank node could be attached later.
                if (quad.object.termType === "BlankNode")
                    datasetsWithMissingBlankNodes.set(quad.object.value, dataset);
                // Some other objects could be notified when a quad is imported.
                if (options && options.callbacks)
                    options.callbacks.forEach(callback => callback(quad));
            });
            return new Promise((resolve, reject) => {
                // If an error occured during the import process, we reject the promise.
                output.on('error', (error) => reject(error));
                // When the import is done without any error.
                output.on('finish', () => {
                    // We atatch the blank nodes to the datasets which refer to them.
                    datasetsWithMissingBlankNodes.forEach((dataset, blankNodeName) => {
                        const blankNodeIndex = blankNodesIndex.get(blankNodeName);
                        const errorMessage = "An imported object refers to a mising blank node " + blankNodeName + ". Check the imported data.";
                        // We should find a blank node index associated to the blank node name.
                        if (blankNodeIndex !== undefined) {
                            const blankNodeDataset = blankNodes.at(blankNodeIndex); // FIXME: requires tsconfig target >= es2022
                            // When we find the blank node we add its quads to the corresponding dataset.
                            if (blankNodeDataset)
                                dataset.addAll(blankNodeDataset);
                            // Otherwise the blank node was not be added to the blankNodes array.
                            else
                                throw new Error(errorMessage);
                        }
                        // Otherwise, the blank node was not been tracked at the dataset creation.
                        else
                            throw new Error(errorMessage);
                    });
                    // If we are just importing one blank node,
                    // we have to add it to the result set.
                    if (datasets.length === 0 && blankNodes.length === 1) {
                        datasets.push(blankNodes[0]);
                    }
                    this.subscribers.forEach((observer) => {
                        observer.next(datasets);
                    });
                    resolve(datasets);
                });
            });
        });
    }
}
//# sourceMappingURL=ConnectorImporterJsonldStream.js.map