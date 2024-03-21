import IDefinedProduct from "./IDefinedProduct.js";
import IPlannedFlow from "./IPlannedFlow.js";
export default interface IPlannedConsumptionFlow extends IPlannedFlow {
    getConsumedProduct(): Promise<IDefinedProduct | undefined>;
    setConsumedProduct(consumedProduct: IDefinedProduct): void;
}
//# sourceMappingURL=IPlannedConsumptionFlow.d.ts.map