import IAddress from "./IAddress.js";
import IAgent from "./IAgent.js";
import ISocialMedia from "./ISocialMedia.js";
import IPhoneNumber from "./IPhoneNumber.js";
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
    removeWebsite(website: string): void;
    getLogo(): string | undefined;
    getPhoneNumbers(options?: IGetterOptions): Promise<IPhoneNumber[]>;
    getEmails(): string[];
    removePhoneNumber(phoneNumber: IPhoneNumber): void;
    removeLocalization(localization: IAddress): void;
    addPhoneNumber(phoneNumber: IPhoneNumber): void;
    addWebsite(website: string): void;
    getSocialMedias(options?: IGetterOptions): Promise<ISocialMedia[]>;
    removeSocialMedia(socialMedia: ISocialMedia): void;
    addLocalization(localization: IAddress): void;
    addEmailAddress(emailAddress: string): void;
    getWebsites(): string[];
    getLocalizations(options?: IGetterOptions): Promise<IAddress[]>;
    setLogo(logo: string): void;
    addSocialMedia(socialMedia: ISocialMedia): void;
    removeEmailAddress(emailAddress: string): void;
}
//# sourceMappingURL=Agent.d.ts.map