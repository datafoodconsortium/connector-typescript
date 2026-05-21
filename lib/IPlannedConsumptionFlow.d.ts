import IPlannedFlow from "./IPlannedFlow.js";
import IDefinedProduct from "./IDefinedProduct.js";
export default interface IPlannedConsumptionFlow extends IPlannedFlow {
    getConsumedProduct(): Promise<IDefinedProduct | undefined>;
    setConsumedProduct(consumedProduct: IDefinedProduct): void;
}
//# sourceMappingURL=IPlannedConsumptionFlow.d.ts.map