import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
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
    setTransformationType(transformationType: ISKOSConcept): void;
    setBeginDate(beginDate: string): void;
    getRealizedConsumptionFlows(options?: IGetterOptions): Promise<IRealizedConsumptionFlow[]>;
    addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getRealizedProductionFlows(options?: IGetterOptions): Promise<IRealizedProductionFlow[]>;
    setEndDate(endDate: string): void;
    setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;
    removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getBeginDate(): string | undefined;
    setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;
    getEndDate(): string | undefined;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
}
//# sourceMappingURL=RealizedTransformation.d.ts.map