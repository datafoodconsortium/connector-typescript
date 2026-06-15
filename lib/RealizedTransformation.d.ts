import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
import ISKOSConcept from "./ISKOSConcept.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class RealizedTransformation extends SemanticObject implements IRealizedTransformation {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        transformationType?: ISKOSConcept;
        startDate?: string;
        endDate?: string;
        consumptionFlows?: IRealizedConsumptionFlow[];
        productionFlows?: IRealizedProductionFlow[];
        doNotStore?: boolean;
    });
    setBeginDate(beginDate: string): void;
    setEndDate(endDate: string): void;
    setTransformationType(transformationType: ISKOSConcept): void;
    getRealizedConsumptionFlows(options?: IGetterOptions): Promise<IRealizedConsumptionFlow[]>;
    setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;
    removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getBeginDate(): string | undefined;
    removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getEndDate(): string | undefined;
    addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    getRealizedProductionFlows(options?: IGetterOptions): Promise<IRealizedProductionFlow[]>;
}
//# sourceMappingURL=RealizedTransformation.d.ts.map