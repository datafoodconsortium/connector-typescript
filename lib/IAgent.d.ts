import PhoneNumberOwner from "./PhoneNumberOwner.js";
import SocialMediaOwner from "./SocialMediaOwner.js";
import WebsiteOwner from "./WebsiteOwner.js";
import EmailOwner from "./EmailOwner.js";
import AddressOwner from "./AddressOwner.js";
import ICustomerCategory from "./ICustomerCategory.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IAgent extends Semanticable, EmailOwner, WebsiteOwner, SocialMediaOwner, AddressOwner, PhoneNumberOwner {
    getLogo(): string | undefined;
    setLogo(logo: string): void;
    addCustomerCategory(customerCategory: ICustomerCategory): void;
    getCustomerCategories(): Promise<ICustomerCategory[]>;
    setCustomerCategories(customerCategories: ICustomerCategory[]): void;
    removeCustomerCategory(customerCategory: ICustomerCategory): void;
}
//# sourceMappingURL=IAgent.d.ts.map