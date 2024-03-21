import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IFlow extends Semanticable {
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
}
//# sourceMappingURL=IFlow.d.ts.map