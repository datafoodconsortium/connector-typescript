import ICatalogItem from "./ICatalogItem.js";
export default interface Proposable {
    getCatalogItems(): Promise<ICatalogItem[]>;
    addCatalogItem(catalogItem: ICatalogItem): void;
}
//# sourceMappingURL=Proposable.d.ts.map