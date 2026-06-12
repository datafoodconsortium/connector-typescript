import IPlannedFlow from "./IPlannedFlow.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
export default interface IPlannedProductionFlow extends IPlannedFlow {
    getProducedProduct(): Promise<ISuppliedProduct | undefined>;
    setProducedProduct(producedProduct: ISuppliedProduct): void;
}
//# sourceMappingURL=IPlannedProductionFlow.d.ts.map