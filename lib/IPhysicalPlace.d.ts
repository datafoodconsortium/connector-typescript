import PhoneNumberOwner from "./PhoneNumberOwner.js";
import IGeoJsonFeature from "./IGeoJsonFeature.js";
import Openable from "./Openable.js";
import IPerson from "./IPerson.js";
import IPlace from "./IPlace.js";
import IAddress from "./IAddress.js";
import ITheoreticalStock from "./ITheoreticalStock.js";
import ContactableByPhone from "./ContactableByPhone.js";
import IRealStock from "./IRealStock.js";
export default interface IPhysicalPlace extends PhoneNumberOwner, ContactableByPhone, Openable, IPlace {
    getAddress(): Promise<IAddress | undefined>;
    setAddress(address: IAddress): void;
    getMainContacts(): Promise<IPerson[]>;
    addMainContact(mainContact: IPerson): void;
    removeMainContact(mainContact: IPerson): void;
    setMainContacts(mainContacts: IPerson[]): void;
    getTheoreticalStocks(): Promise<ITheoreticalStock[]>;
    addTheoreticalStock(theoreticalStock: ITheoreticalStock): void;
    removeTheoreticalStock(theoreticalStock: ITheoreticalStock): void;
    setTheoreticalStocks(theoreticalStocks: ITheoreticalStock[]): void;
    getRealStocks(): Promise<IRealStock[]>;
    addRealStock(realStock: IRealStock): void;
    removeRealStock(realStock: IRealStock): void;
    setRealStocks(realStocks: IRealStock[]): void;
    getFeatures(): Promise<IGeoJsonFeature[]>;
    setFeatures(features: IGeoJsonFeature[]): void;
    addFeature(feature: IGeoJsonFeature): void;
    removeFeature(feature: IGeoJsonFeature): void;
}
//# sourceMappingURL=IPhysicalPlace.d.ts.map