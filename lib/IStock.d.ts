import IPhysicalPlace from "./IPhysicalPlace.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IStock extends Semanticable {
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
    getAvailabilityDate(): string | undefined;
    setAvailabilityDate(availabilityDate: string): void;
    getPhysicalPlace(): Promise<IPhysicalPlace | undefined>;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
}
//# sourceMappingURL=IStock.d.ts.map