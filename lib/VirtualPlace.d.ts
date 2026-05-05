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
    getUrls(): string[];
    removeHostedSaleSession(): ISaleSession | undefined;
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    addUrl(url: string): void;
    setName(name: string): void;
    setHostedSaleSessions(saleSessions: ISaleSession[]): void;
    addHostedSaleSession(saleSession: ISaleSession): void;
    setUrls(urls: string[]): void;
    getHostedSaleSessions(options?: IGetterOptions): Promise<ISaleSession[]>;
    removeUrl(url: string): void;
}
//# sourceMappingURL=VirtualPlace.d.ts.map