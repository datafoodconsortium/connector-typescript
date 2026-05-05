import ILocalizedProduct from "./ILocalizedProduct.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
export default interface IPlannedLocalProductionFlow extends IPlannedLocalFlow {
    getProducedProduct(): Promise<ILocalizedProduct | undefined>;
    setProducedProduct(producedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=IPlannedLocalProductionFlow.d.ts.map