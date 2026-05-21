import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealizedFlow from "./IRealizedFlow.js";
export default interface IRealizedProductionFlow extends IRealizedFlow {
    getProducedProduct(): Promise<IPhysicalProduct | undefined>;
    setProducedProduct(producedProduct: IPhysicalProduct): void;
}
//# sourceMappingURL=IRealizedProductionFlow.d.ts.map