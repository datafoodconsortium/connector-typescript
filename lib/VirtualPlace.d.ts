import IVirtualPlace from "./IVirtualPlace.js";
import ISaleSession from "./ISaleSession.js";
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
    addHostedSaleSession(saleSession: ISaleSession): void;
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    removeHostedSaleSession(): ISaleSession | undefined;
    setName(name: string): void;
    removeUrl(url: string): void;
    getHostedSaleSessions(options?: IGetterOptions): Promise<ISaleSession[]>;
    getUrls(): string[];
    addUrl(url: string): void;
    setHostedSaleSessions(saleSessions: ISaleSession[]): void;
    setUrls(urls: string[]): void;
}
//# sourceMappingURL=VirtualPlace.d.ts.map