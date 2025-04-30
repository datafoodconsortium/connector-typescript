import DatasetExt from "rdf-ext/lib/Dataset";
import IConnectorImporter from "./IConnectorImporter";
import IConnectorImporterOptions from "./IConnectorImporterOptions";
import { Observable } from "./observer.js";
export default class ConnectorImporterJsonldStream extends Observable<DatasetExt[]> implements IConnectorImporter {
    private context;
    private documentLoader;
    constructor(parameters?: {
        context?: any;
        documentLoader?: any;
    });
    import(json: string, options?: IConnectorImporterOptions): Promise<Array<DatasetExt>>;
}
//# sourceMappingURL=ConnectorImporterJsonldStream.d.ts.map