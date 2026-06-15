import ISKOSConcept from "./ISKOSConcept.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
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
    setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;
    getBeginDate(): string | undefined;
    getRealizedProductionFlows(options?: IGetterOptions): Promise<IRealizedProductionFlow[]>;
    removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    setEndDate(endDate: string): void;
    removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getEndDate(): string | undefined;
    addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setBeginDate(beginDate: string): void;
    setTransformationType(transformationType: ISKOSConcept): void;
    setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;
}
//# sourceMappingURL=RealizedTransformation.d.ts.map