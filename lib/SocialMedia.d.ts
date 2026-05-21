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
    setUrl(url: string): void;
    getName(): string | undefined;
    getUrl(): string | undefined;
    setName(name: string): void;
}
//# sourceMappingURL=SocialMedia.d.ts.map