import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IPlannedTransformation extends Semanticable {
    getTransformationType(): Promise<ISKOSConcept | undefined>;
    setTransformationType(transformationType: ISKOSConcept): void;
    getPlannedConsumptionFlows(): Promise<IPlannedConsumptionFlow[]>;
    setPlannedConsumptionFlows(plannedConsumptionFlows: IPlannedConsumptionFlow[]): void;
    getPlannedProductionFlows(): Promise<IPlannedProductionFlow[]>;
    setPlannedProductionFlows(plannedProductionFlows: IPlannedProductionFlow[]): void;
    addPlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    removePlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    addPlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    removePlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
}
//# sourceMappingURL=IPlannedTransformation.d.ts.map