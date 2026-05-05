import IFlow from "./IFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
export default interface IPlannedLocalFlow extends IFlow {
    getPlannedLocalTransformation(): Promise<IPlannedLocalTransformation | undefined>;
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
}
//# sourceMappingURL=IPlannedLocalFlow.d.ts.map