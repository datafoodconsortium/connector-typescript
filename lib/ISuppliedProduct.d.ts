import IDefinedProduct from "./IDefinedProduct.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
export default interface ISuppliedProduct extends IDefinedProduct {
    getLocalizedProducts(): Promise<ILocalizedProduct[]>;
    addLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    removeLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    setLocalizedProducts(localizedProducts: ILocalizedProduct[]): void;
}
//# sourceMappingURL=ISuppliedProduct.d.ts.map