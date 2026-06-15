import IAddress from "./IAddress.js";
import IPerson from "./IPerson.js";
import IOrganization from "./IOrganization.js";
import Agent from "./Agent.js";
import ICustomerCategory from "./ICustomerCategory.js";
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
    setAffiliatedOrganizations(organizations: IOrganization[]): void;
    getAffiliatedOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
    getLastName(): string | undefined;
    affiliateTo(organization: IOrganization): void;
    setFirstName(firstName: string): void;
    setLastName(lastName: string): void;
    getFirstName(): string | undefined;
    leaveAffiliatedOrganization(organization: IOrganization): void;
}
//# sourceMappingURL=Person.d.ts.map