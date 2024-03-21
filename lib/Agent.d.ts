import ISocialMedia from "./ISocialMedia.js";
import IPhoneNumber from "./IPhoneNumber.js";
import IAddress from "./IAddress.js";
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
    removePhoneNumber(phoneNumber: IPhoneNumber): void;
    getWebsites(): string[];
    addWebsite(website: string): void;
    removeWebsite(website: string): void;
    getLogo(): string | undefined;
    setLogo(logo: string): void;
    removeEmailAddress(emailAddress: string): void;
    addLocalization(localization: IAddress): void;
    removeSocialMedia(socialMedia: ISocialMedia): void;
    addPhoneNumber(phoneNumber: IPhoneNumber): void;
    getEmails(): string[];
    getPhoneNumbers(options?: IGetterOptions): Promise<IPhoneNumber[]>;
    addSocialMedia(socialMedia: ISocialMedia): void;
    removeLocalization(localization: IAddress): void;
    getSocialMedias(options?: IGetterOptions): Promise<ISocialMedia[]>;
    addEmailAddress(emailAddress: string): void;
    getLocalizations(options?: IGetterOptions): Promise<IAddress[]>;
}
//# sourceMappingURL=Agent.d.ts.map