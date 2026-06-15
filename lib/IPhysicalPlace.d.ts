import IRealStock from "./IRealStock.js";
import Openable from "./Openable.js";
import ITheoreticalStock from "./ITheoreticalStock.js";
import IAddress from "./IAddress.js";
import IPlace from "./IPlace.js";
import PhoneNumberOwner from "./PhoneNumberOwner.js";
import ContactableByPhone from "./ContactableByPhone.js";
import IPerson from "./IPerson.js";
export default interface IPhysicalPlace extends Openable, IPlace, ContactableByPhone, PhoneNumberOwner {
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
}
//# sourceMappingURL=IPhysicalPlace.d.ts.map