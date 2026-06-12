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
    setTransformationType(transformationType: ISKOSConcept): void;
    getRealizedConsumptionFlows(options?: IGetterOptions): Promise<IRealizedConsumptionFlow[]>;
    getEndDate(): string | undefined;
    setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;
    setBeginDate(beginDate: string): void;
    setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;
    removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    getTransformationType(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    setEndDate(endDate: string): void;
    removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    getBeginDate(): string | undefined;
    getRealizedProductionFlows(options?: IGetterOptions): Promise<IRealizedProductionFlow[]>;
}
//# sourceMappingURL=RealizedTransformation.d.ts.map