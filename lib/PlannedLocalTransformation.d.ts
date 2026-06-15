import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
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
    setPlannedLocalConsumptionFlows(plannedLocalConsumptionFlows: IPlannedLocalConsumptionFlow[]): void;
    setPlannedLocalProductionFlows(plannedLocalProductionFlows: IPlannedLocalProductionFlow[]): void;
    setBeginDate(beginDate: string): void;
    setTransformationType(transformationType: ISKOSConcept): void;
    setCost(cost: number): void;
    setEndDate(endDate: string): void;
    getPlannedLocalConsumptionFlows(options?: IGetterOptions): Promise<IPlannedLocalConsumptionFlow[]>;
    getPlannedLocalProductionFlows(options?: IGetterOptions): Promise<IPlannedLocalProductionFlow[]>;
    getBeginDate(): string | undefined;
    removePlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
    addPlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
    getEndDate(): string | undefined;
    getCost(): number | undefined;
    addPlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    removePlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
}
//# sourceMappingURL=PlannedLocalTransformation.d.ts.map