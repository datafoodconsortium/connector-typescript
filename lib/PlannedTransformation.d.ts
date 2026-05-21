import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
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
    getPlannedConsumptionFlows(options?: IGetterOptions): Promise<IPlannedConsumptionFlow[]>;
    removePlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setPlannedProductionFlows(plannedProductionFlows: IPlannedProductionFlow[]): void;
    removePlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    addPlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    addPlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    getPlannedProductionFlows(options?: IGetterOptions): Promise<IPlannedProductionFlow[]>;
    setTransformationType(transformationType: ISKOSConcept): void;
    setPlannedConsumptionFlows(plannedConsumptionFlows: IPlannedConsumptionFlow[]): void;
}
//# sourceMappingURL=PlannedTransformation.d.ts.map