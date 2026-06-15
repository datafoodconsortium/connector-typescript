import IStock from "./IStock.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
export default interface ITheoreticalStock extends IStock {
    getLocalizedProduct(): Promise<ILocalizedProduct | undefined>;
    setLocalizedProduct(localizedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=ITheoreticalStock.d.ts.map