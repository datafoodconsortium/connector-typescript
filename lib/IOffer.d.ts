import Stockable from "./Stockable.js";
import Marketable from "./Marketable.js";
import Payable from "./Payable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IOffer extends Semanticable, Stockable, Payable, Marketable {
}
//# sourceMappingURL=IOffer.d.ts.map