import IPlannedTransformation from "./IPlannedTransformation.js";
import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedTransformation extends SemanticObject implements IPlannedTransformation {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        transformationType?: ISKOSConcept;
        consumptionFlows?: IPlannedConsumptionFlow[];
        productionFlows?: IPlannedProductionFlow[];
        doNotStore?: boolean;
    });
    setPlannedProductionFlows(plannedProductionFlows: IPlannedProductionFlow[]): void;
    getPlannedProductionFlows(options?: IGetterOptions): Promise<IPlannedProductionFlow[]>;
    getPlannedConsumptionFlows(options?: IGetterOptions): Promise<IPlannedConsumptionFlow[]>;
    removePlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    addPlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    addPlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    setPlannedConsumptionFlows(plannedConsumptionFlows: IPlannedConsumptionFlow[]): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    removePlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    setTransformationType(transformationType: ISKOSConcept): void;
}
//# sourceMappingURL=PlannedTransformation.d.ts.map