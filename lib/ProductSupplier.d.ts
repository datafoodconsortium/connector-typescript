import ISuppliedProduct from "./ISuppliedProduct.js";
export default interface ProductSupplier {
    getSuppliedProducts(): Promise<Array<ISuppliedProduct>>;
    supplyProduct(suppliedProduct: ISuppliedProduct): void;
    unsupplyProduct(suppliedProduct: ISuppliedProduct): void;
}
//# sourceMappingURL=ProductSupplier.d.ts.map