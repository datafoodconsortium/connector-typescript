import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import Ellapsable from "./Ellapsable.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IPlannedLocalTransformation extends Semanticable, Ellapsable {
    getTransformationType(): Promise<ISKOSConcept | undefined>;
    setTransformationType(transformationType: ISKOSConcept): void;
    getCost(): number | undefined;
    setCost(cost: number): void;
    getPlannedLocalConsumptionFlows(): Promise<IPlannedLocalConsumptionFlow[]>;
    setPlannedLocalConsumptionFlows(plannedLocalConsumptionFlows: IPlannedLocalConsumptionFlow[]): void;
    getPlannedLocalProductionFlows(): Promise<IPlannedLocalProductionFlow[]>;
    setPlannedLocalProductionFlows(plannedLocalProductionFlows: IPlannedLocalProductionFlow[]): void;
    addPlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
    removePlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
    addPlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
    removePlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
}
//# sourceMappingURL=IPlannedLocalTransformation.d.ts.map