import AddressOwner from "./AddressOwner.js";
import PhoneNumberOwner from "./PhoneNumberOwner.js";
import SocialMediaOwner from "./SocialMediaOwner.js";
import WebsiteOwner from "./WebsiteOwner.js";
import EmailOwner from "./EmailOwner.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IAgent extends Semanticable, SocialMediaOwner, WebsiteOwner, AddressOwner, EmailOwner, PhoneNumberOwner {
    getLogo(): string | undefined;
    setLogo(logo: string): void;
}
//# sourceMappingURL=IAgent.d.ts.map