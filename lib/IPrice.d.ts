import Quantifiable from "./Quantifiable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IPrice extends Semanticable, Quantifiable {
    getVatRate(): number | undefined;
    setVatRate(vatRate: number): void;
}
//# sourceMappingURL=IPrice.d.ts.map