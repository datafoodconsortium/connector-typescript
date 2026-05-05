import IRealizedFlow from "./IRealizedFlow.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
export default interface IRealizedConsumptionFlow extends IRealizedFlow {
    getConsumedProduct(): Promise<IPhysicalProduct | undefined>;
    setConsumedProduct(consumedProduct: IPhysicalProduct): void;
}
//# sourceMappingURL=IRealizedConsumptionFlow.d.ts.map