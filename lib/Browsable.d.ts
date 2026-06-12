import ICatalogItem from "./ICatalogItem.js";
import IOrganization from "./IOrganization.js";
export default interface Browsable {
    getMaintainers(): Promise<IOrganization[]>;
    getItems(): Promise<ICatalogItem[]>;
    removeItem(item: ICatalogItem): void;
    addItem(item: ICatalogItem): void;
    addMaintainer(maintainer: IOrganization): void;
    setItems(items: ICatalogItem[]): void;
    removeMaintainer(maintainer: IOrganization): void;
    setMaintainers(maintainers: IOrganization[]): void;
}
//# sourceMappingURL=Browsable.d.ts.map