import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
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
    getEndDate(): string | undefined;
    addPlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
    setPlannedLocalProductionFlows(plannedLocalProductionFlows: IPlannedLocalProductionFlow[]): void;
    setBeginDate(beginDate: string): void;
    getPlannedLocalConsumptionFlows(options?: IGetterOptions): Promise<IPlannedLocalConsumptionFlow[]>;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getPlannedLocalProductionFlows(options?: IGetterOptions): Promise<IPlannedLocalProductionFlow[]>;
    setTransformationType(transformationType: ISKOSConcept): void;
    removePlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
    setEndDate(endDate: string): void;
    getBeginDate(): string | undefined;
    removePlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
    getCost(): number | undefined;
    setCost(cost: number): void;
    addPlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
}
//# sourceMappingURL=PlannedLocalTransformation.d.ts.map