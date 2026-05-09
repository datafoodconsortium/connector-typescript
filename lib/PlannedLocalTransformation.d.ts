import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
import ISKOSConcept from "./ISKOSConcept.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedLocalTransformation extends SemanticObject implements IPlannedLocalTransformation {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        transformationType?: ISKOSConcept;
        cost?: number;
        startDate?: string;
        endDate?: string;
        consumptionFlows?: IPlannedLocalConsumptionFlow[];
        productionFlows?: IPlannedLocalProductionFlow[];
        doNotStore?: boolean;
    });
    setEndDate(endDate: string): void;
    addPlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
    setPlannedLocalConsumptionFlows(plannedLocalConsumptionFlows: IPlannedLocalConsumptionFlow[]): void;
    getBeginDate(): string | undefined;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setBeginDate(beginDate: string): void;
    setCost(cost: number): void;
    getEndDate(): string | undefined;
    getPlannedLocalConsumptionFlows(options?: IGetterOptions): Promise<IPlannedLocalConsumptionFlow[]>;
    getPlannedLocalProductionFlows(options?: IGetterOptions): Promise<IPlannedLocalProductionFlow[]>;
    getCost(): number | undefined;
    removePlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
    setTransformationType(transformationType: ISKOSConcept): void;
    removePlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
    addPlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
    setPlannedLocalProductionFlows(plannedLocalProductionFlows: IPlannedLocalProductionFlow[]): void;
}
//# sourceMappingURL=PlannedLocalTransformation.d.ts.map