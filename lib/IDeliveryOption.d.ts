import IPhysicalPlace from "./IPhysicalPlace.js";
import IShippingOption from "./IShippingOption.js";
export default interface IDeliveryOption extends IShippingOption {
    getDeliveredPlace(): Promise<IPhysicalPlace | undefined>;
    setDeliveredPlace(deliveredPlace: IPhysicalPlace): void;
    getDeliveryConstraint(): string | undefined;
    setDeliveryConstraint(deliveryConstraint: string): void;
    getAccessibilityInformation(): string | undefined;
    setAccessibilityInformation(accessibilityInformation: string): void;
}
//# sourceMappingURL=IDeliveryOption.d.ts.map