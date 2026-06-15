import IShippingOption from "./IShippingOption.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
export default interface IPickupOption extends IShippingOption {
    getPickedUpPlace(): Promise<IPhysicalPlace | undefined>;
    setPickedUpPlace(pickedUpPlace: IPhysicalPlace): void;
}
//# sourceMappingURL=IPickupOption.d.ts.map