import IAddress from "./IAddress.js";
export default interface Identifiable {
    getLocalizations(): Promise<Array<IAddress>>;
    addLocalization(localization: IAddress): void;
    removeLocalization(localization: IAddress): void;
}
//# sourceMappingURL=Identifiable.d.ts.map