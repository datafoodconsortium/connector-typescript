import { Semanticable } from "@virtual-assembly/semantizer";
import IConnectorStore from "./IConnectorStore";
export default class ConnectorStoreMap implements IConnectorStore {
    private storeObject;
    constructor();
    get(semanticObjectId: string): Promise<Semanticable | undefined>;
    has(semanticObjectId: string): boolean;
    set(semanticObject: Semanticable): void;
    setAll(semanticObjects: Array<Semanticable>): void;
}
//# sourceMappingURL=ConnectorStoreMap.d.ts.map