import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
export default interface IPlannedLocalConsumptionFlow extends IPlannedLocalFlow {
    getConsumedProduct(): Promise<ILocalizedProduct | undefined>;
    setConsumedProduct(consumedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=IPlannedLocalConsumptionFlow.d.ts.map