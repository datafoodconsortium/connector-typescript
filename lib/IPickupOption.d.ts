import IPhysicalPlace from "./IPhysicalPlace.js";
import IShippingOption from "./IShippingOption.js";
export default interface IPickupOption extends IShippingOption {
    getPickedUpPlace(): Promise<IPhysicalPlace | undefined>;
    setPickedUpPlace(pickedUpPlace: IPhysicalPlace): void;
}
//# sourceMappingURL=IPickupOption.d.ts.map