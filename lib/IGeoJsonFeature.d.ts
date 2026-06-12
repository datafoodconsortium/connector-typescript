import IGeoJsonGeometry from "./IGeoJsonGeometry.js";
import IGeoJsonProperties from "./IGeoJsonProperties.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IGeoJsonFeature extends Semanticable {
    getGeometry(): Promise<IGeoJsonGeometry | undefined>;
    setGeometry(geometry: IGeoJsonGeometry): void;
    getProperties(): Promise<IGeoJsonProperties | undefined>;
    setProperties(properties: IGeoJsonProperties): void;
}
//# sourceMappingURL=IGeoJsonFeature.d.ts.map