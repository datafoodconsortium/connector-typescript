import IEnterprise from "./IEnterprise.js";
export default interface Affiliable {
    getAffiliatedOrganizations(): Promise<Array<IEnterprise>>;
    affiliateTo(organization: IEnterprise): void;
    leaveAffiliatedOrganization(organization: IEnterprise): void;
}
//# sourceMappingURL=Affiliable.d.ts.map