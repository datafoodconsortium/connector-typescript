import IAddress from "./IAddress.js";
import IPhoneNumber from "./IPhoneNumber.js";
import IAgent from "./IAgent.js";
import ISocialMedia from "./ISocialMedia.js";
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
    removeEmailAddress(emailAddress: string): void;
    getLogo(): string | undefined;
    addLocalization(localization: IAddress): void;
    getWebsites(): string[];
    setSocialMedias(socialMedias: ISocialMedia[]): void;
    setPhoneNumbers(phoneNumbers: IPhoneNumber[]): void;
    removeSocialMedia(socialMedia: ISocialMedia): void;
    removePhoneNumber(phoneNumber: IPhoneNumber): void;
    removeLocalization(localization: IAddress): void;
    addEmailAddress(emailAddress: string): void;
    removeWebsite(website: string): void;
    getEmails(): string[];
    getPhoneNumbers(options?: IGetterOptions): Promise<IPhoneNumber[]>;
    getSocialMedias(options?: IGetterOptions): Promise<ISocialMedia[]>;
    setEmails(emailAddresses: string[]): void;
    addWebsite(website: string): void;
    setLocalizations(localizations: IAddress[]): void;
    setWebsites(emailAddresses: string[]): void;
    setLogo(logo: string): void;
    addPhoneNumber(phoneNumber: IPhoneNumber): void;
    addSocialMedia(socialMedia: ISocialMedia): void;
    getLocalizations(options?: IGetterOptions): Promise<IAddress[]>;
}
//# sourceMappingURL=Agent.d.ts.map