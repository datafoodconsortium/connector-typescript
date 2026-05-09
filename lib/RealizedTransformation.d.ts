import ISKOSConcept from "./ISKOSConcept.js";
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
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
    getRealizedConsumptionFlows(options?: IGetterOptions): Promise<IRealizedConsumptionFlow[]>;
    setEndDate(endDate: string): void;
    setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;
    setTransformationType(transformationType: ISKOSConcept): void;
    getBeginDate(): string | undefined;
    setBeginDate(beginDate: string): void;
    removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getEndDate(): string | undefined;
    removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getRealizedProductionFlows(options?: IGetterOptions): Promise<IRealizedProductionFlow[]>;
    setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;
    addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
}
//# sourceMappingURL=RealizedTransformation.d.ts.map