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
    removeHostedSaleSession(): ISaleSession | undefined;
    getDescription(): string | undefined;
    getName(): string | undefined;
    addUrl(url: string): void;
    getHostedSaleSessions(options?: IGetterOptions): Promise<ISaleSession[]>;
    setDescription(description: string): void;
    setHostedSaleSessions(saleSessions: ISaleSession[]): void;
    getUrls(): string[];
    setName(name: string): void;
    addHostedSaleSession(saleSession: ISaleSession): void;
    removeUrl(url: string): void;
}
//# sourceMappingURL=VirtualPlace.d.ts.map