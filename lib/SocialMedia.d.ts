import ISocialMedia from "./ISocialMedia.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class SocialMedia extends SemanticObject implements ISocialMedia {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        url?: string;
        doNotStore?: boolean;
    });
    setName(name: string): void;
    setUrl(url: string): void;
    getName(): string | undefined;
    getUrl(): string | undefined;
}
//# sourceMappingURL=SocialMedia.d.ts.map