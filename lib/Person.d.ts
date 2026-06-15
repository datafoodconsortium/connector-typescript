import IAddress from "./IAddress.js";
import IPerson from "./IPerson.js";
import IEnterprise from "./IEnterprise.js";
import Agent from "./Agent.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Person extends Agent implements IPerson {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        firstName?: string;
        lastName?: string;
        localizations?: IAddress[];
        organizations?: IEnterprise[];
        logo?: string;
        doNotStore?: boolean;
    });
    affiliateTo(organization: IEnterprise): void;
    setAffiliatedOrganizations(organizations: IEnterprise[]): void;
    getLastName(): string | undefined;
    getAffiliatedOrganizations(options?: IGetterOptions): Promise<IEnterprise[]>;
    setLastName(lastName: string): void;
    setFirstName(firstName: string): void;
    getFirstName(): string | undefined;
    leaveAffiliatedOrganization(organization: IEnterprise): void;
}
//# sourceMappingURL=Person.d.ts.map