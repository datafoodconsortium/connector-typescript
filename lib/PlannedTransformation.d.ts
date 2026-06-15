import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import ISKOSConcept from "./ISKOSConcept.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
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
    setPlannedConsumptionFlows(plannedConsumptionFlows: IPlannedConsumptionFlow[]): void;
    addPlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    getPlannedConsumptionFlows(options?: IGetterOptions): Promise<IPlannedConsumptionFlow[]>;
    removePlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getPlannedProductionFlows(options?: IGetterOptions): Promise<IPlannedProductionFlow[]>;
    addPlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    setTransformationType(transformationType: ISKOSConcept): void;
    setPlannedProductionFlows(plannedProductionFlows: IPlannedProductionFlow[]): void;
    removePlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
}
//# sourceMappingURL=PlannedTransformation.d.ts.map