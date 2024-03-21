import ISuppliedProduct from "./ISuppliedProduct.js";
import IPlannedFlow from "./IPlannedFlow.js";
export default interface IPlannedProductionFlow extends IPlannedFlow {
    getProducedProduct(): Promise<ISuppliedProduct | undefined>;
    setProducedProduct(producedProduct: ISuppliedProduct): void;
}
//# sourceMappingURL=IPlannedProductionFlow.d.ts.map