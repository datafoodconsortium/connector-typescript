import ICustomerCategory from "./ICustomerCategory.js";
export default interface Onboardable {
    getCustomerCategories(): Promise<Array<ICustomerCategory>>;
    addCustomerCategory(customerCategory: ICustomerCategory): void;
}
//# sourceMappingURL=Onboardable.d.ts.map