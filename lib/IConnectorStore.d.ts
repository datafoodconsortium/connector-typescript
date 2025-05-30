import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IConnectorStore {
    get(semanticObjectId: string): Promise<Semanticable | undefined>;
    has(semanticObjectId: string): boolean;
    remove(semanticObjectId: string): void;
    set(semanticObject: Semanticable): void;
    setAll(semanticObjects: Array<Semanticable>): void;
}
//# sourceMappingURL=IConnectorStore.d.ts.map