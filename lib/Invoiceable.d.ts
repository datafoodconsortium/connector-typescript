import Orderable from "./Orderable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Invoiceable {
    getOrders(): IterableIterator<(Orderable & Semanticable)>;
}
//# sourceMappingURL=Invoiceable.d.ts.map