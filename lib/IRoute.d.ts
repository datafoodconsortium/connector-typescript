import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import IStep from "./IStep.js";
import IGeoJsonFeature from "./IGeoJsonFeature.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IRoute extends Semanticable, Nameable, Describable {
    getSteps(): Promise<IStep[]>;
    setSteps(steps: IStep[]): void;
    addStep(step: IStep): void;
    removeStep(step: IStep): void;
    getFeatures(): Promise<IGeoJsonFeature[]>;
    setFeatures(features: IGeoJsonFeature[]): void;
    addFeature(feature: IGeoJsonFeature): void;
    removeFeature(feature: IGeoJsonFeature): void;
}
//# sourceMappingURL=IRoute.d.ts.map