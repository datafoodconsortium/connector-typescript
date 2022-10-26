import ICharacteristic from "./ICharacteristic.js";
import ICharacteristicDimension from "./ICharacteristicDimension.js";
import QuantitativeValue from "./QuantitativeValue.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default abstract class Characteristic extends QuantitativeValue implements ICharacteristic {
    constructor(quantityUnit: string, quantityValue: number);
    abstract getQuantityDimension(): (ICharacteristicDimension & Semanticable);
    abstract setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void;
}
//# sourceMappingURL=Characteristic.d.ts.map