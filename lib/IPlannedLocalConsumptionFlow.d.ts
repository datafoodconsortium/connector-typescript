import ILocalizedProduct from "./ILocalizedProduct.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
export default interface IPlannedLocalConsumptionFlow extends IPlannedLocalFlow {
    getConsumedProduct(): Promise<ILocalizedProduct | undefined>;
    setConsumedProduct(consumedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=IPlannedLocalConsumptionFlow.d.ts.map