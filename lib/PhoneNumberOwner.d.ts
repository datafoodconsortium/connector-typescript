import IPhoneNumber from "./IPhoneNumber.js";
import ContactableByPhone from "./ContactableByPhone.js";
export default interface PhoneNumberOwner extends ContactableByPhone {
    addPhoneNumber(phoneNumber: IPhoneNumber): void;
    removePhoneNumber(phoneNumber: IPhoneNumber): void;
}
//# sourceMappingURL=PhoneNumberOwner.d.ts.map