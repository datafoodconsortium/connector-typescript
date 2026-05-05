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
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    setSteps(steps: IStep[]): void;
    setName(name: string): void;
    getFeatures(options?: IGetterOptions): Promise<IGeoJsonFeature[]>;
    removeStep(step: IStep): void;
    removeFeature(feature: IGeoJsonFeature): void;
    getSteps(options?: IGetterOptions): Promise<IStep[]>;
    addStep(step: IStep): void;
    setFeatures(features: IGeoJsonFeature[]): void;
    addFeature(feature: IGeoJsonFeature): void;
}
//# sourceMappingURL=Route.d.ts.map