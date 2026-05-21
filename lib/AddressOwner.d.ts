import IAddress from "./IAddress.js";
import ContactableByAddress from "./ContactableByAddress.js";
export default interface AddressOwner extends ContactableByAddress {
    addLocalization(localization: IAddress): void;
    removeLocalization(localization: IAddress): void;
    setLocalizations(localizations: IAddress[]): void;
}
//# sourceMappingURL=AddressOwner.d.ts.map