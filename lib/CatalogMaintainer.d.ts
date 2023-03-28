import ICatalog from "./ICatalog.js";
export default interface CatalogMaintainer {
    getMaintainedCatalogs(): Promise<Array<ICatalog>>;
    maintainCatalog(catalog: ICatalog): void;
    unmaintainCatalog(catalog: ICatalog): void;
}
//# sourceMappingURL=CatalogMaintainer.d.ts.map