import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import IFlow from "./IFlow.js";
export default interface IPlannedLocalFlow extends IFlow {
    getPlannedLocalTransformation(): Promise<IPlannedLocalTransformation | undefined>;
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
}
//# sourceMappingURL=IPlannedLocalFlow.d.ts.map