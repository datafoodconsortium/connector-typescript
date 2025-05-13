import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import ISKOSConcept from "./ISKOSConcept.js";
import Characteristic from "./Characteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class AllergenCharacteristic extends Characteristic implements IAllergenCharacteristic {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
        allergenDimension?: ISKOSConcept;
    });
    getQuantityDimension(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setQuantityDimension(quantityDimension: ISKOSConcept): void;
}
//# sourceMappingURL=AllergenCharacteristic.d.ts.map