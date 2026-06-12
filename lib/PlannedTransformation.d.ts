import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import ISKOSConcept from "./ISKOSConcept.js";
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
    getPlannedProductionFlows(options?: IGetterOptions): Promise<IPlannedProductionFlow[]>;
    getPlannedConsumptionFlows(options?: IGetterOptions): Promise<IPlannedConsumptionFlow[]>;
    setPlannedProductionFlows(plannedProductionFlows: IPlannedProductionFlow[]): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    addPlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    removePlannedConsumptionFlow(plannedConsumptionFlow: IPlannedConsumptionFlow): void;
    setTransformationType(transformationType: ISKOSConcept): void;
    addPlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
    setPlannedConsumptionFlows(plannedConsumptionFlows: IPlannedConsumptionFlow[]): void;
    removePlannedProductionFlow(plannedProductionFlow: IPlannedProductionFlow): void;
}
//# sourceMappingURL=PlannedTransformation.d.ts.map