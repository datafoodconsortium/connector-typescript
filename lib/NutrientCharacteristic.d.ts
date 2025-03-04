import INutrientCharacteristic from "./INutrientCharacteristic.js";
import ISKOSConcept from "./ISKOSConcept.js";
import Characteristic from "./Characteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class NutrientCharacteristic extends Characteristic implements INutrientCharacteristic {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
        nutrientDimension?: ISKOSConcept;
    });
    getQuantityDimension(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setQuantityDimension(quantityDimension: ISKOSConcept): void;
}
//# sourceMappingURL=NutrientCharacteristic.d.ts.map