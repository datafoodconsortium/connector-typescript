import IGeoJsonFeature from "./IGeoJsonFeature.js";
import IRoute from "./IRoute.js";
import IStep from "./IStep.js";
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
    addStep(step: IStep): void;
    getDescription(): string | undefined;
    getName(): string | undefined;
    setFeatures(features: IGeoJsonFeature[]): void;
    setDescription(description: string): void;
    getSteps(options?: IGetterOptions): Promise<IStep[]>;
    setName(name: string): void;
    setSteps(steps: IStep[]): void;
    removeStep(step: IStep): void;
    addFeature(feature: IGeoJsonFeature): void;
    removeFeature(feature: IGeoJsonFeature): void;
    getFeatures(options?: IGetterOptions): Promise<IGeoJsonFeature[]>;
}
//# sourceMappingURL=Route.d.ts.map