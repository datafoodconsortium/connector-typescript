import IFlow from "./IFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
export default interface IPlannedFlow extends IFlow {
    getPlannedTransformation(): Promise<IPlannedTransformation | undefined>;
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
}
//# sourceMappingURL=IPlannedFlow.d.ts.map