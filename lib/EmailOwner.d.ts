import ContactableByEmail from "./ContactableByEmail.js";
export default interface EmailOwner extends ContactableByEmail {
    addEmailAddress(emailAddress: string): void;
    removeEmailAddress(emailAddress: string): void;
}
//# sourceMappingURL=EmailOwner.d.ts.map