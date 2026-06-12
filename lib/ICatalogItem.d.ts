import Stockable from "./Stockable.js";
import Offerable from "./Offerable.js";
import Catalogable from "./Catalogable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ICatalogItem extends Semanticable, Catalogable, Offerable, Stockable {
    getSku(): string | undefined;
    setSku(sku: string): void;
}
//# sourceMappingURL=ICatalogItem.d.ts.map