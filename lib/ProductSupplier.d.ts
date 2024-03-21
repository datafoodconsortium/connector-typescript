import ISuppliedProduct from "./ISuppliedProduct.js";
export default interface ProductSupplier {
    getSuppliedProducts(): Promise<ISuppliedProduct[]>;
    supplyProduct(suppliedProduct: ISuppliedProduct): void;
    unsupplyProduct(suppliedProduct: ISuppliedProduct): void;
}
//# sourceMappingURL=ProductSupplier.d.ts.map