import ILocalizedProduct from "./ILocalizedProduct.js";
import IDefinedProduct from "./IDefinedProduct.js";
export default interface ISuppliedProduct extends IDefinedProduct {
    getLocalizedProducts(): Promise<ILocalizedProduct[]>;
    addLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    removeLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    setLocalizedProducts(localizedProducts: ILocalizedProduct[]): void;
}
//# sourceMappingURL=ISuppliedProduct.d.ts.map