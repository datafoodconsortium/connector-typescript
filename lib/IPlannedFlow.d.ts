import IPlannedTransformation from "./IPlannedTransformation.js";
import IFlow from "./IFlow.js";
export default interface IPlannedFlow extends IFlow {
    getPlannedTransformation(): Promise<IPlannedTransformation | undefined>;
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
}
//# sourceMappingURL=IPlannedFlow.d.ts.map