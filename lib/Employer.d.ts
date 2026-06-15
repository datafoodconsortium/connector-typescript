import IPerson from "./IPerson.js";
export default interface Employer {
    getAffiliates(): Promise<IPerson[]>;
    addAffiliate(affiliate: IPerson): void;
    removeAffiliate(affiliate: IPerson): void;
    setAffiliates(affiliates: IPerson[]): void;
}
//# sourceMappingURL=Employer.d.ts.map