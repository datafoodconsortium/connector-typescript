import IPerson from "./IPerson.js";
import IAddress from "./IAddress.js";
import Agent from "./Agent.js";
import IEnterprise from "./IEnterprise.js";
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
    getAffiliatedOrganizations(options?: IGetterOptions): Promise<IEnterprise[]>;
    leaveAffiliatedOrganization(organization: IEnterprise): void;
    getLastName(): string | undefined;
    affiliateTo(organization: IEnterprise): void;
    getFirstName(): string | undefined;
    setFirstName(firstName: string): void;
    setLastName(lastName: string): void;
}
//# sourceMappingURL=Person.d.ts.map