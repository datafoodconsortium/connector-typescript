import ISKOSConcept from "./ISKOSConcept.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import Ellapsable from "./Ellapsable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IRealizedTransformation extends Semanticable, Ellapsable {
    getTransformationType(): Promise<ISKOSConcept | undefined>;
    setTransformationType(transformationType: ISKOSConcept): void;
    getRealizedConsumptionFlows(): Promise<IRealizedConsumptionFlow[]>;
    setRealizedConsumptionFlows(realizedConsumptionFlows: IRealizedConsumptionFlow[]): void;
    getRealizedProductionFlows(): Promise<IRealizedProductionFlow[]>;
    setRealizedProductionFlows(realizedProductionFlows: IRealizedProductionFlow[]): void;
    addRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    removeRealizedConsumptionFlow(realizedConsumptionFlow: IRealizedConsumptionFlow): void;
    addRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
    removeRealizedProductionFlow(realizedProductionFlow: IRealizedProductionFlow): void;
}
//# sourceMappingURL=IRealizedTransformation.d.ts.map