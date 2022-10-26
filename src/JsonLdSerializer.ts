import { ObjectSerializer, Semanticable, Serializer } from "@virtual-assembly/semantizer";
import jsonld from 'jsonld';

export default class JsonLdSerializer implements Serializer<Promise<string>> {

    private context: jsonld.ContextDefinition;
    private space: number | undefined;

    constructor(context: jsonld.ContextDefinition) {
        this.context = context;
        this.space = undefined;
    }

    public setSpace(space: number | undefined): void {
        this.space = space;
    }

    async process(subject: Semanticable): Promise<string> {
        let document = subject.serialize(new ObjectSerializer);
        const compacted = await jsonld.compact(document, this.context);
        return JSON.stringify(compacted, null, this.space);
    }

}