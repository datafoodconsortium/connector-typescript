import ICatalogItem from "./ICatalogItem.js";
export default interface CatalogItemManager {
    getManagedCatalogItems(): Promise<Array<ICatalogItem>>;
    manageCatalogItem(catalogItem: ICatalogItem): void;
    unmanageCatalogItem(catalogItem: ICatalogItem): void;
}
//# sourceMappingURL=CatalogItemManager.d.ts.map