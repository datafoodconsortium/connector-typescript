import Nameable from "./Nameable.js";
import IGeoJsonFeature from "./IGeoJsonFeature.js";
import Describable from "./Describable.js";
import IStep from "./IStep.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IRoute extends Semanticable, Describable, Nameable {
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