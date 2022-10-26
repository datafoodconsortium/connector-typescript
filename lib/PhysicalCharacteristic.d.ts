import IPhysicalDimension from "./IPhysicalDimension.js";
import Characteristic from "./Characteristic.js";
import ICharacteristicDimension from "./ICharacteristicDimension.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default class PhysicalCharacteristic extends Characteristic implements IPhysicalCharacteristic {
    private physicalDimension;
    constructor(quantityUnit: string, quantityValue: number, physicalDimension: (IPhysicalDimension & Semanticable));
    getQuantityDimension(): (ICharacteristicDimension & Semanticable);
    setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void;
}
//# sourceMappingURL=PhysicalCharacteristic.d.ts.map