import { Semanticable, Serializer } from "@virtual-assembly/semantizer";
import jsonld from 'jsonld';
export default class JsonLdSerializer implements Serializer<Promise<string>> {
    private context;
    private space;
    constructor(context: jsonld.ContextDefinition);
    setSpace(space: number | undefined): void;
    process(subject: Semanticable): Promise<string>;
}
//# sourceMappingURL=JsonLdSerializer.d.ts.map