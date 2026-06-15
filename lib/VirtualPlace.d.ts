import ISaleSession from "./ISaleSession.js";
import IVirtualPlace from "./IVirtualPlace.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class VirtualPlace extends SemanticObject implements IVirtualPlace {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        hostedSaleSessions?: ISaleSession[];
        urls?: string[];
        doNotStore?: boolean;
    });
    setUrls(urls: string[]): void;
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    getHostedSaleSessions(options?: IGetterOptions): Promise<ISaleSession[]>;
    addHostedSaleSession(saleSession: ISaleSession): void;
    getUrls(): string[];
    setName(name: string): void;
    removeHostedSaleSession(): ISaleSession | undefined;
    removeUrl(url: string): void;
    addUrl(url: string): void;
    setHostedSaleSessions(saleSessions: ISaleSession[]): void;
}
//# sourceMappingURL=VirtualPlace.d.ts.map