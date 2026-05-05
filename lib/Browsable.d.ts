import IOrganization from "./IOrganization.js";
import ICatalogItem from "./ICatalogItem.js";
export default interface Browsable {
    getMaintainers(): Promise<IOrganization[]>;
    getItems(): Promise<ICatalogItem[]>;
    removeItem(item: ICatalogItem): void;
    addItem(item: ICatalogItem): void;
    addMaintainer(maintainer: IOrganization): void;
}
//# sourceMappingURL=Browsable.d.ts.map