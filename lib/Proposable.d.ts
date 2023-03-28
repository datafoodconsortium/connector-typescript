import ICatalogItem from "./ICatalogItem.js";
export default interface Proposable {
    getCatalogItems(): Promise<Array<ICatalogItem>>;
    addCatalogItem(catalogItem: ICatalogItem): void;
}
//# sourceMappingURL=Proposable.d.ts.map