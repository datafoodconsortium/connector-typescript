import ITemplateSaleSession from "./ITemplateSaleSession.js";
import IOrganization from "./IOrganization.js";
import IPlace from "./IPlace.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class TemplateSaleSession extends SemanticObject implements ITemplateSaleSession {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        hostingPlaces?: IPlace[];
        organizations?: IOrganization[];
        doNotStore?: boolean;
    });
    addHostingPlace(hostingPlace: IPlace): void;
    getHostingPlaces(options?: IGetterOptions): Promise<IPlace[]>;
    addOrganization(organization: IOrganization): void;
    removeHostingPlace(hostingPlace: IPlace): void;
    setDate(date: string): void;
    getDate(): string | undefined;
    setOrganizations(organizations: IOrganization[]): void;
    removeOrganization(organization: IOrganization): void;
    setHostingPlaces(hostingPlaces: IPlace[]): void;
    getOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
}
//# sourceMappingURL=TemplateSaleSession.d.ts.map