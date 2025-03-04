import ContactableByAddress from "./ContactableByAddress.js";
import IAddress from "./IAddress.js";
export default interface AddressOwner extends ContactableByAddress {
    addLocalization(localization: IAddress): void;
    removeLocalization(localization: IAddress): void;
}
//# sourceMappingURL=AddressOwner.d.ts.map