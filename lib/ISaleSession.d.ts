import IHostingPlace from "./IHostingPlace.js";
import Ellapsable from "./Ellapsable.js";
import IOffer from "./IOffer.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ISaleSession extends Semanticable, Ellapsable, IHostingPlace {
    getQuantity(): number | undefined;
    setQuantity(quantity: number): void;
    getOffers(): Promise<IOffer[]>;
    addOffer(offer: IOffer): void;
    setOffers(offers: IOffer[]): void;
    removeOffer(offer: IOffer): void;
}
//# sourceMappingURL=ISaleSession.d.ts.map