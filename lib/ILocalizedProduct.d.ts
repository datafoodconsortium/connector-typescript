import ITheoreticalStock from "./ITheoreticalStock.js";
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
import Describable from "./Describable.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import Exhibitable from "./Exhibitable.js";
import IQuantity from "./IQuantity.js";
import Nameable from "./Nameable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ILocalizedProduct extends Semanticable, Nameable, Describable, Exhibitable {
    getCost(): number | undefined;
    setCost(cost: number): void;
    getTheoreticalStocks(): Promise<ITheoreticalStock[]>;
    addTheoreticalStock(theoreticalStock: ITheoreticalStock): void;
    removeTheoreticalStock(theoreticalStock: ITheoreticalStock): void;
    setTheoreticalStocks(theoreticalStocks: ITheoreticalStock[]): void;
    getSuppliedProducts(): Promise<ISuppliedProduct[]>;
    addSuppliedProduct(suppliedProduct: ISuppliedProduct): void;
    removeSuppliedProduct(suppliedProduct: ISuppliedProduct): void;
    setSuppliedProducts(suppliedProducts: ISuppliedProduct[]): void;
    getPhysicalProducts(): Promise<IPhysicalProduct[]>;
    addPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    removePhysicalProduct(physicalProduct: IPhysicalProduct): void;
    setPhysicalProducts(physicalProducts: IPhysicalProduct[]): void;
    getPlannedLocalConsumptionFlows(): Promise<IPlannedLocalConsumptionFlow[]>;
    addPlannedLocalConsumptionFlow(consumptionFlow: IPlannedLocalConsumptionFlow): void;
    removePlannedLocalConsumptionFlow(consumptionFlow: IPlannedLocalConsumptionFlow): void;
    setPlannedLocalConsumptionFlows(consumptionFlows: IPlannedLocalConsumptionFlow[]): void;
    getPlannedLocalProductionFlows(): Promise<IPlannedLocalProductionFlow[]>;
    addPlannedLocalProductionFlow(productionFlow: IPlannedLocalProductionFlow): void;
    removePlannedLocalProductionFlow(productionFlow: IPlannedLocalProductionFlow): void;
    setPlannedLocalProductionFlows(productionFlows: IPlannedLocalProductionFlow[]): void;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
}
//# sourceMappingURL=ILocalizedProduct.d.ts.map