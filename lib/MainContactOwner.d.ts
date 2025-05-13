import IPerson from "./IPerson.js";
import ManagedByMainContact from "./ManagedByMainContact.js";
export default interface MainContactOwner extends ManagedByMainContact {
    setMainContact(mainContact: IPerson): void;
}
//# sourceMappingURL=MainContactOwner.d.ts.map