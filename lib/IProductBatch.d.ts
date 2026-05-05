import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealStock from "./IRealStock.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IProductBatch extends Semanticable, Describable, Nameable {
    getBatchNumber(): string | undefined;
    setBatchNumber(batchNumber: string): void;
    getPhysicalProduct(): Promise<IPhysicalProduct | undefined>;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    getRealStock(): Promise<IRealStock | undefined>;
    setRealStock(realStock: IRealStock): void;
    getBestBeforeDate(): string | undefined;
    setBestBeforeDate(bestBeforeDate: string): void;
    getExpirationDate(): string | undefined;
    setExpirationDate(expirationDate: string): void;
    getProductionDate(): string | undefined;
    setProductionDate(productionDate: string): void;
}
//# sourceMappingURL=IProductBatch.d.ts.map