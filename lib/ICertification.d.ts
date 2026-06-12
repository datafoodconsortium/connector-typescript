import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import IOrganization from "./IOrganization.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ICertification extends Semanticable, Nameable, Describable {
    addCertificationReference(certificationReference: string): void;
    getCertificationReferences(): string[];
    setCertificationReferences(certificationReferences: string[]): void;
    removeCertificationReference(certificationReference: string): void;
    addCertificationScore(certificationReference: string): void;
    getCertificationScores(): string[];
    setCertificationScores(certificationReferences: string[]): void;
    removeCertificationScore(certificationReference: string): void;
    addOperatorId(operatorId: string): void;
    getOpereratorIds(): string[];
    setOperatorIds(operatorIds: string[]): void;
    removeOperatorId(operatorId: string): void;
    addCertifiedOrganization(certifiedOrganization: IOrganization): void;
    getCertifiedOrganizations(): Promise<IOrganization[]>;
    setCertifiedOrganizations(certifiedOrganizations: IOrganization[]): void;
    removeCertifiedOrganization(certifiedOrganization: IOrganization): void;
}
//# sourceMappingURL=ICertification.d.ts.map