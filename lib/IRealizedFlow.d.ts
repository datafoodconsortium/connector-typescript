import IRealizedTransformation from "./IRealizedTransformation.js";
import IFlow from "./IFlow.js";
export default interface IRealizedFlow extends IFlow {
    getRealizedTransformation(): Promise<IRealizedTransformation | undefined>;
    setRealizedTransformation(realizedTransformation: IRealizedTransformation): void;
}
//# sourceMappingURL=IRealizedFlow.d.ts.map