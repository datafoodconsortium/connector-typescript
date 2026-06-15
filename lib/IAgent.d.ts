import SocialMediaOwner from "./SocialMediaOwner.js";
import EmailOwner from "./EmailOwner.js";
import PhoneNumberOwner from "./PhoneNumberOwner.js";
import AddressOwner from "./AddressOwner.js";
import WebsiteOwner from "./WebsiteOwner.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IAgent extends Semanticable, WebsiteOwner, PhoneNumberOwner, AddressOwner, EmailOwner, SocialMediaOwner {
    getLogo(): string | undefined;
    setLogo(logo: string): void;
}
//# sourceMappingURL=IAgent.d.ts.map