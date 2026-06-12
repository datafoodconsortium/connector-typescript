import Agent from "./Agent.js";
import IPerson from "./IPerson.js";
import ICustomerCategory from "./ICustomerCategory.js";
import IOrganization from "./IOrganization.js";
import IAddress from "./IAddress.js";
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
        organizations?: IOrganization[];
        logo?: string;
        customerCategoriesMembership?: ICustomerCategory[];
        doNotStore?: boolean;
    });
    affiliateTo(organization: IOrganization): void;
    setLastName(lastName: string): void;
    leaveAffiliatedOrganization(organization: IOrganization): void;
    getFirstName(): string | undefined;
    getLastName(): string | undefined;
    getAffiliatedOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
    setFirstName(firstName: string): void;
    setAffiliatedOrganizations(organizations: IOrganization[]): void;
}
//# sourceMappingURL=Person.d.ts.map