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
    setUrls(urls: string[]): void;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    removeUrl(url: string): void;
    getUrls(): string[];
    removeHostedSaleSession(): ISaleSession | undefined;
    setHostedSaleSessions(saleSessions: ISaleSession[]): void;
    getName(): string | undefined;
    addHostedSaleSession(saleSession: ISaleSession): void;
    setName(name: string): void;
    addUrl(url: string): void;
    getHostedSaleSessions(options?: IGetterOptions): Promise<ISaleSession[]>;
}
//# sourceMappingURL=VirtualPlace.d.ts.map