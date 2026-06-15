import IAgent from "./IAgent.js";
import IPhoneNumber from "./IPhoneNumber.js";
import ISocialMedia from "./ISocialMedia.js";
import IAddress from "./IAddress.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default abstract class Agent extends SemanticObject implements IAgent {
    protected connector: IConnector;
    protected constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        localizations?: IAddress[];
        phoneNumbers?: IPhoneNumber[];
        emails?: string[];
        websites?: string[];
        socialMedias?: ISocialMedia[];
        logo?: string;
        doNotStore?: boolean;
    });
    setWebsites(emailAddresses: string[]): void;
    addSocialMedia(socialMedia: ISocialMedia): void;
    removeEmailAddress(emailAddress: string): void;
    addPhoneNumber(phoneNumber: IPhoneNumber): void;
    setLocalizations(localizations: IAddress[]): void;
    removeSocialMedia(socialMedia: ISocialMedia): void;
    getSocialMedias(options?: IGetterOptions): Promise<ISocialMedia[]>;
    setSocialMedias(socialMedias: ISocialMedia[]): void;
    setPhoneNumbers(phoneNumbers: IPhoneNumber[]): void;
    removeLocalization(localization: IAddress): void;
    addWebsite(website: string): void;
    getLocalizations(options?: IGetterOptions): Promise<IAddress[]>;
    getPhoneNumbers(options?: IGetterOptions): Promise<IPhoneNumber[]>;
    setEmails(emailAddresses: string[]): void;
    getWebsites(): string[];
    getEmails(): string[];
    addEmailAddress(emailAddress: string): void;
    addLocalization(localization: IAddress): void;
    getLogo(): string | undefined;
    setLogo(logo: string): void;
    removeWebsite(website: string): void;
    removePhoneNumber(phoneNumber: IPhoneNumber): void;
}
//# sourceMappingURL=Agent.d.ts.map