import SocialMediaOwner from "./SocialMediaOwner.js";
import PhoneNumberOwner from "./PhoneNumberOwner.js";
import WebsiteOwner from "./WebsiteOwner.js";
import AddressOwner from "./AddressOwner.js";
import EmailOwner from "./EmailOwner.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IAgent extends Semanticable, EmailOwner, WebsiteOwner, AddressOwner, SocialMediaOwner, PhoneNumberOwner {
    getLogo(): string | undefined;
    setLogo(logo: string): void;
}
//# sourceMappingURL=IAgent.d.ts.map