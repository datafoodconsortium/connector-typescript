import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealizedFlow from "./IRealizedFlow.js";
export default interface IRealizedConsumptionFlow extends IRealizedFlow {
    getConsumedProduct(): Promise<IPhysicalProduct | undefined>;
    setConsumedProduct(consumedProduct: IPhysicalProduct): void;
}
//# sourceMappingURL=IRealizedConsumptionFlow.d.ts.map