import Offerable from "./Offerable.js";
import Catalogable from "./Catalogable.js";
import Stockable from "./Stockable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ICatalogItem extends Semanticable, Stockable, Offerable, Catalogable {
    getSku(): string | undefined;
    setSku(sku: string): void;
}
//# sourceMappingURL=ICatalogItem.d.ts.map