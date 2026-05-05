import IOrganization from "./IOrganization.js";
export default interface Affiliable {
    getAffiliatedOrganizations(): Promise<IOrganization[]>;
    affiliateTo(organization: IOrganization): void;
    leaveAffiliatedOrganization(organization: IOrganization): void;
}
//# sourceMappingURL=Affiliable.d.ts.map