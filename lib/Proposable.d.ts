import ICatalogItem from "./ICatalogItem.js";
export default interface Proposable {
    getCatalogItems(): Promise<ICatalogItem[]>;
    addCatalogItem(catalogItem: ICatalogItem): void;
    removeCatalogItem(catalogItem: ICatalogItem): void;
    setCatalogItems(catalogItems: ICatalogItem[]): void;
}
//# sourceMappingURL=Proposable.d.ts.map