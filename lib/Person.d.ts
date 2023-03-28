import IPerson from "./IPerson.js";
import Agent from "./Agent.js";
import IAddress from "./IAddress.js";
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
        doNotStore?: boolean;
    });
    getLastName(): string;
    getFirstName(): string;
    setLastName(lastName: string): void;
    setFirstName(firstName: string): void;
    affiliateTo(organization: IEnterprise): void;
    leaveAffiliatedOrganization(organization: IEnterprise): void;
    getAffiliatedOrganizations(options?: IGetterOptions): Promise<Array<IEnterprise>>;
}
//# sourceMappingURL=Person.d.ts.map