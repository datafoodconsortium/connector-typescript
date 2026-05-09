import IAddress from "./IAddress.js";
import IPhoneNumber from "./IPhoneNumber.js";
import ISocialMedia from "./ISocialMedia.js";
import IAgent from "./IAgent.js";
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
    getLogo(): string | undefined;
    removeWebsite(website: string): void;
    setLocalizations(localizations: IAddress[]): void;
    addEmailAddress(emailAddress: string): void;
    removePhoneNumber(phoneNumber: IPhoneNumber): void;
    removeLocalization(localization: IAddress): void;
    removeSocialMedia(socialMedia: ISocialMedia): void;
    getLocalizations(options?: IGetterOptions): Promise<IAddress[]>;
    removeEmailAddress(emailAddress: string): void;
    getWebsites(): string[];
    setLogo(logo: string): void;
    getSocialMedias(options?: IGetterOptions): Promise<ISocialMedia[]>;
    getPhoneNumbers(options?: IGetterOptions): Promise<IPhoneNumber[]>;
    setPhoneNumbers(phoneNumbers: IPhoneNumber[]): void;
    getEmails(): string[];
    addWebsite(website: string): void;
    addPhoneNumber(phoneNumber: IPhoneNumber): void;
    addLocalization(localization: IAddress): void;
    addSocialMedia(socialMedia: ISocialMedia): void;
}
//# sourceMappingURL=Agent.d.ts.map