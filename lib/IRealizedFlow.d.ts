import IFlow from "./IFlow.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
export default interface IRealizedFlow extends IFlow {
    getRealizedTransformation(): Promise<IRealizedTransformation | undefined>;
    setRealizedTransformation(realizedTransformation: IRealizedTransformation): void;
}
//# sourceMappingURL=IRealizedFlow.d.ts.map