import IHostingPlace from "./IHostingPlace.js";
import Datable from "./Datable.js";
import IOrganization from "./IOrganization.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ITemplateSaleSession extends Semanticable, Datable, IHostingPlace {
    getOrganizations(): Promise<IOrganization[]>;
    addOrganization(organization: IOrganization): void;
    setOrganizations(organizations: IOrganization[]): void;
    removeOrganization(organization: IOrganization): void;
}
//# sourceMappingURL=ITemplateSaleSession.d.ts.map