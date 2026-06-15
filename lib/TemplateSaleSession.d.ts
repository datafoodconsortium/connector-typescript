import IPlace from "./IPlace.js";
import IOrganization from "./IOrganization.js";
import ITemplateSaleSession from "./ITemplateSaleSession.js";
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
    getDate(): string | undefined;
    addHostingPlace(hostingPlace: IPlace): void;
    removeOrganization(organization: IOrganization): void;
    setHostingPlaces(hostingPlaces: IPlace[]): void;
    setOrganizations(organizations: IOrganization[]): void;
    setDate(date: string): void;
    addOrganization(organization: IOrganization): void;
    removeHostingPlace(hostingPlace: IPlace): void;
    getOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
    getHostingPlaces(options?: IGetterOptions): Promise<IPlace[]>;
}
//# sourceMappingURL=TemplateSaleSession.d.ts.map