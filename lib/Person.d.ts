import IOrganization from "./IOrganization.js";
import IAddress from "./IAddress.js";
import IPerson from "./IPerson.js";
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
    getAffiliatedOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
    setLastName(lastName: string): void;
    affiliateTo(organization: IOrganization): void;
    leaveAffiliatedOrganization(organization: IOrganization): void;
    setFirstName(firstName: string): void;
    getFirstName(): string | undefined;
    getLastName(): string | undefined;
}
//# sourceMappingURL=Person.d.ts.map