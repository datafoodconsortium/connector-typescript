import ICustomerCategory from "./ICustomerCategory.js";
export default interface Onboardable {
    getCustomerCategories(): Promise<ICustomerCategory[]>;
    addCustomerCategory(customerCategory: ICustomerCategory): void;
}
//# sourceMappingURL=Onboardable.d.ts.map