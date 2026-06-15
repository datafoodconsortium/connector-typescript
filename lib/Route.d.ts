import IStep from "./IStep.js";
import IGeoJsonFeature from "./IGeoJsonFeature.js";
import IRoute from "./IRoute.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Route extends SemanticObject implements IRoute {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        steps?: IStep[];
        features?: IGeoJsonFeature[];
        doNotStore?: boolean;
    });
    removeStep(step: IStep): void;
    getFeatures(options?: IGetterOptions): Promise<IGeoJsonFeature[]>;
    getName(): string | undefined;
    setFeatures(features: IGeoJsonFeature[]): void;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    setSteps(steps: IStep[]): void;
    addFeature(feature: IGeoJsonFeature): void;
    setName(name: string): void;
    addStep(step: IStep): void;
    removeFeature(feature: IGeoJsonFeature): void;
    getSteps(options?: IGetterOptions): Promise<IStep[]>;
}
//# sourceMappingURL=Route.d.ts.map