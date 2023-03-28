import ICatalogItem from "./ICatalogItem.js";
import IEnterprise from "./IEnterprise.js";
export default interface Browsable {
    getMaintainers(): Promise<Array<IEnterprise>>;
    getItems(): Promise<Array<ICatalogItem>>;
    removeItem(item: ICatalogItem): void;
    addItem(item: ICatalogItem): void;
    addMaintainer(maintainer: IEnterprise): void;
}
//# sourceMappingURL=Browsable.d.ts.map