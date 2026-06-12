import Nameable from "./Nameable.js";
import Exhibitable from "./Exhibitable.js";
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import IProductBatch from "./IProductBatch.js";
import Describable from "./Describable.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IRealStock from "./IRealStock.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IPhysicalProduct extends Semanticable, Exhibitable, Nameable, Describable {
    getRealStocks(): Promise<IRealStock[]>;
    addRealStock(realStock: IRealStock): void;
    removeRealStock(realStock: IRealStock): void;
    setRealStocks(realStock: IRealStock[]): void;
    getLocalizedProducts(): Promise<ILocalizedProduct[]>;
    addLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    removeLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    setLocalizedProducts(localizedProducts: ILocalizedProduct[]): void;
    getProductBatches(): Promise<IProductBatch[]>;
    addProductBatch(productBatch: IProductBatch): void;
    removeProductBatch(productBatch: IProductBatch): void;
    setProductBatches(productBatches: IProductBatch[]): void;
    getRealizedConsumptionFlows(): Promise<IRealizedConsumptionFlow[]>;
    addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;
    getRealizedProductionFlows(): Promise<IRealizedProductionFlow[]>;
    addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
}
//# sourceMappingURL=IPhysicalProduct.d.ts.map