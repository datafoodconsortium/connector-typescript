import ICharacteristicDimension from "./ICharacteristicDimension.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Measurable {
    getQuantityDimension(): (ICharacteristicDimension & Semanticable);
    setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void;
}
//# sourceMappingURL=Measurable.d.ts.map