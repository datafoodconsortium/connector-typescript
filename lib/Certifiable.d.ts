import ICertification from "./ICertification.js";
export default interface Certifiable {
    addCertification(certification: ICertification): void;
    getCertifications(): Promise<Array<ICertification>>;
    removeCertification(certification: ICertification): void;
}
//# sourceMappingURL=Certifiable.d.ts.map