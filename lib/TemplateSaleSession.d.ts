import IOrganization from "./IOrganization.js";
import ITemplateSaleSession from "./ITemplateSaleSession.js";
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
    setDate(date: string): void;
    addOrganization(organization: IOrganization): void;
    setHostingPlaces(hostingPlaces: IPlace[]): void;
    getHostingPlaces(options?: IGetterOptions): Promise<IPlace[]>;
    removeHostingPlace(hostingPlace: IPlace): void;
    getOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
    removeOrganization(organization: IOrganization): void;
    getDate(): string | undefined;
    setOrganizations(organizations: IOrganization[]): void;
}
//# sourceMappingURL=TemplateSaleSession.d.ts.map