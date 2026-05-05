import AddressOwner from "./AddressOwner.js";
import SocialMediaOwner from "./SocialMediaOwner.js";
import PhoneNumberOwner from "./PhoneNumberOwner.js";
import ICustomerCategory from "./ICustomerCategory.js";
import WebsiteOwner from "./WebsiteOwner.js";
import EmailOwner from "./EmailOwner.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IAgent extends Semanticable, AddressOwner, WebsiteOwner, EmailOwner, PhoneNumberOwner, SocialMediaOwner {
    getLogo(): string | undefined;
    setLogo(logo: string): void;
    addCustomerCategory(customerCategory: ICustomerCategory): void;
    getCustomerCategories(): Promise<ICustomerCategory[]>;
    setCustomerCategories(customerCategories: ICustomerCategory[]): void;
    removeCustomerCategory(customerCategory: ICustomerCategory): void;
}
//# sourceMappingURL=IAgent.d.ts.map