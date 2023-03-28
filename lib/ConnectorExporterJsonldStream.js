var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import SerializerJsonld from '@rdfjs/serializer-jsonld-ext';
import { Readable } from 'readable-stream';
export default class ConnectorExporterJsonldStream {
    constructor(context, outputContext) {
        this.context = context;
        this.outputContext = outputContext;
    }
    export(semanticObjets, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const context = (options === null || options === void 0 ? void 0 : options.inputContext) ? options.inputContext : this.context;
            const outputContext = (options === null || options === void 0 ? void 0 : options.outputContext) ? options.outputContext : this.outputContext;
            const serializer = new SerializerJsonld({ compact: true, context: context });
            const input = new Readable({
                objectMode: true,
                read: () => {
                    semanticObjets.forEach((semanticObject) => semanticObject.toRdfDatasetExt().forEach((quad) => input.push(quad)));
                    input.push(null);
                }
            });
            const output = serializer.import(input);
            return new Promise((resolve, reject) => {
                output.on('error', (error) => reject(error));
                output.on('data', (json) => {
                    if (outputContext) {
                        json["@context"] = outputContext;
                    }
                    resolve(JSON.stringify(json));
                });
            });
        });
    }
}
//# sourceMappingURL=ConnectorExporterJsonldStream.js.map