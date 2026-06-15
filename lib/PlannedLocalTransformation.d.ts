import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
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
    getBeginDate(): string | undefined;
    setCost(cost: number): void;
    setEndDate(endDate: string): void;
    setPlannedLocalProductionFlows(plannedLocalProductionFlows: IPlannedLocalProductionFlow[]): void;
    getCost(): number | undefined;
    getPlannedLocalConsumptionFlows(options?: IGetterOptions): Promise<IPlannedLocalConsumptionFlow[]>;
    setPlannedLocalConsumptionFlows(plannedLocalConsumptionFlows: IPlannedLocalConsumptionFlow[]): void;
    addPlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
    setTransformationType(transformationType: ISKOSConcept): void;
    addPlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
    getEndDate(): string | undefined;
    removePlannedLocalProductionFlow(plannedLocalProductionFlow: IPlannedLocalProductionFlow): void;
    getPlannedLocalProductionFlows(options?: IGetterOptions): Promise<IPlannedLocalProductionFlow[]>;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setBeginDate(beginDate: string): void;
    removePlannedLocalConsumptionFlow(plannedLocalConsumptionFlow: IPlannedLocalConsumptionFlow): void;
}
//# sourceMappingURL=PlannedLocalTransformation.d.ts.map