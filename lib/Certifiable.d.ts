import ISKOSConcept from "./ISKOSConcept.js";
export default interface Certifiable {
    addCertification(certification: ISKOSConcept): void;
    getCertifications(): Promise<ISKOSConcept[]>;
    removeCertification(certification: ISKOSConcept): void;
}
//# sourceMappingURL=Certifiable.d.ts.map