import ISocialMedia from "./ISocialMedia.js";
import ContactableBySocialMedia from "./ContactableBySocialMedia.js";
export default interface SocialMediaOwner extends ContactableBySocialMedia {
    addSocialMedia(socialMedia: ISocialMedia): void;
    removeSocialMedia(socialMedia: ISocialMedia): void;
}
//# sourceMappingURL=SocialMediaOwner.d.ts.map