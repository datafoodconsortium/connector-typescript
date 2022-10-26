import Quantifiable from "./Quantifiable.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
export default class QuantitativeValue extends SemanticObject implements Quantifiable {
    private quantityUnit;
    private quantityValue;
    constructor(quantityUnit: string, quantityValue: number);
    getQuantityUnit(): string;
    setQuantityValue(quantityValue: number): void;
    getQuantityValue(): number;
    setQuantityUnit(quantityUnit: string): void;
}
//# sourceMappingURL=QuantitativeValue.d.ts.map