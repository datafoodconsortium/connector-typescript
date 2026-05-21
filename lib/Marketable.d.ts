import ICatalogItem from "./ICatalogItem.js";
import ICustomerCategory from "./ICustomerCategory.js";
export default interface Marketable {
    getOfferedItem(): Promise<ICatalogItem | undefined>;
    getCustomerCategory(): Promise<ICustomerCategory | undefined>;
    setOfferedItem(offeredItem: ICatalogItem): void;
    setCustomerCategory(customerCategory: ICustomerCategory): void;
}
//# sourceMappingURL=Marketable.d.ts.map