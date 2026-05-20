import { Semanticable } from "@virtual-assembly/semantizer";
import { ContextDefinition } from "jsonld";
import IConnectorExporter from "./IConnectorExporter";
import IConnectorExporterOptions from "./IConnectorExporterOptions";
import { Observable } from "./observer.js";
export default class ConnectorExporterJsonldStream extends Observable<string> implements IConnectorExporter {
    private context?;
    private outputContext?;
    constructor(context?: ContextDefinition, outputContext?: any);
    export(semanticObjets: Array<Semanticable>, options?: IConnectorExporterOptions): Promise<string>;
}
//# sourceMappingURL=ConnectorExporterJsonldStream.d.ts.map