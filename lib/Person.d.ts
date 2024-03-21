import IAddress from "./IAddress.js";
import IEnterprise from "./IEnterprise.js";
import IPerson from "./IPerson.js";
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
    getFirstName(): string | undefined;
    getLastName(): string | undefined;
    setLastName(lastName: string): void;
    leaveAffiliatedOrganization(organization: IEnterprise): void;
    setFirstName(firstName: string): void;
    affiliateTo(organization: IEnterprise): void;
    getAffiliatedOrganizations(options?: IGetterOptions): Promise<IEnterprise[]>;
}
//# sourceMappingURL=Person.d.ts.map