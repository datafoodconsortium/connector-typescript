import ISKOSConcept from "./ISKOSConcept.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
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
    addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    getEndDate(): string | undefined;
    removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setTransformationType(transformationType: ISKOSConcept): void;
    setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;
    addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getRealizedProductionFlows(options?: IGetterOptions): Promise<IRealizedProductionFlow[]>;
    setBeginDate(beginDate: string): void;
    setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;
    getRealizedConsumptionFlows(options?: IGetterOptions): Promise<IRealizedConsumptionFlow[]>;
    getBeginDate(): string | undefined;
    setEndDate(endDate: string): void;
}
//# sourceMappingURL=RealizedTransformation.d.ts.map