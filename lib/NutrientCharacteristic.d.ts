import INutrientCharacteristic from "./INutrientCharacteristic.js";
import Characteristic from "./Characteristic.js";
import ICharacteristicDimension from "./ICharacteristicDimension.js";
import INutrientDimension from "./INutrientDimension.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default class NutrientCharacteristic extends Characteristic implements INutrientCharacteristic {
    private nutrientDimension;
    constructor(quantityUnit: string, quantityValue: number, nutrientDimension: (INutrientDimension & Semanticable));
    getQuantityDimension(): (ICharacteristicDimension & Semanticable);
    setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void;
}
//# sourceMappingURL=NutrientCharacteristic.d.ts.map