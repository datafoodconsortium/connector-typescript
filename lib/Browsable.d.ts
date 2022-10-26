import Catalogable from "./Catalogable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Browsable {
    getMaintainers(): IterableIterator<(Catalogable & Semanticable)>;
    getListedItems(): IterableIterator<(Catalogable & Semanticable)>;
}
//# sourceMappingURL=Browsable.d.ts.map