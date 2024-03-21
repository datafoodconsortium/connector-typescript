import ICatalog from "./ICatalog.js";
export default interface CatalogMaintainer {
    getMaintainedCatalogs(): Promise<ICatalog[]>;
    maintainCatalog(catalog: ICatalog): void;
    unmaintainCatalog(catalog: ICatalog): void;
}
//# sourceMappingURL=CatalogMaintainer.d.ts.map