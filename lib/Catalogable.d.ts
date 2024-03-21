import ICatalog from "./ICatalog.js";
export default interface Catalogable {
    getCatalogs(): Promise<ICatalog[]>;
    registerInCatalog(repository: ICatalog): void;
}
//# sourceMappingURL=Catalogable.d.ts.map