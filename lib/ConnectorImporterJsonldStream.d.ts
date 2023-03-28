import IConnectorImporter from "./IConnectorImporter";
import DatasetExt from "rdf-ext/lib/Dataset";
import IConnectorImporterOptions from "./IConnectorImporterOptions";
export default class ConnectorImporterJsonldStream implements IConnectorImporter {
    private context;
    private documentLoader;
    constructor(parameters?: {
        context?: any;
        documentLoader?: any;
    });
    import(json: string, options?: IConnectorImporterOptions): Promise<Array<DatasetExt>>;
}
//# sourceMappingURL=ConnectorImporterJsonldStream.d.ts.map