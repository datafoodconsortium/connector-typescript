import IAllergenDimension from "./IAllergenDimension.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import ICharacteristicDimension from "./ICharacteristicDimension.js";
import Characteristic from "./Characteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default class AllergenCharacteristic extends Characteristic implements IAllergenCharacteristic {
    private allergenDimension;
    constructor(quantityUnit: string, quantityValue: number, allergenDimension: (IAllergenDimension & Semanticable));
    getQuantityDimension(): (ICharacteristicDimension & Semanticable);
    setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void;
}
//# sourceMappingURL=AllergenCharacteristic.d.ts.map