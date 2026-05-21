import ContactableBySocialMedia from "./ContactableBySocialMedia.js";
import ISocialMedia from "./ISocialMedia.js";
export default interface SocialMediaOwner extends ContactableBySocialMedia {
    addSocialMedia(socialMedia: ISocialMedia): void;
    removeSocialMedia(socialMedia: ISocialMedia): void;
    setSocialMedias(socialMedias: ISocialMedia[]): void;
}
//# sourceMappingURL=SocialMediaOwner.d.ts.map