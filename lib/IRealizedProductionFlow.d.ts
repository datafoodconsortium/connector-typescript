import IRealizedFlow from "./IRealizedFlow.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
export default interface IRealizedProductionFlow extends IRealizedFlow {
    getProducedProduct(): Promise<IPhysicalProduct | undefined>;
    setProducedProduct(producedProduct: IPhysicalProduct): void;
}
//# sourceMappingURL=IRealizedProductionFlow.d.ts.map