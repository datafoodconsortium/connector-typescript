import Agent from "./Agent.js";
import Onboardable from "./Onboardable.js";
import IPerson from "./IPerson.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default class Person extends Agent implements IPerson {
    private firstName;
    private lastName;
    private affiliatedOrganizations;
    constructor(firstName: string, lastName: string);
    affiliateTo(organization: (Onboardable & Semanticable)): void;
    leaveAffiliatedOrganization(organization: (Onboardable & Semanticable)): void;
    getAffiliatedOrganizations(): IterableIterator<(Onboardable & Semanticable)>;
    setFirstName(firstName: string): void;
    setLastName(lastName: string): void;
    getFirstName(): string;
    getLastName(): string;
}
//# sourceMappingURL=Person.d.ts.map