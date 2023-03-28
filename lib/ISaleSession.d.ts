import Ellapsable from "./Ellapsable.js";
import IOffer from "./IOffer.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ISaleSession extends Semanticable, Ellapsable {
    getQuantity(): number;
    setQuantity(quantity: number): void;
    getOffers(): Promise<Array<IOffer>>;
    addOffer(offer: IOffer): void;
}
//# sourceMappingURL=ISaleSession.d.ts.map