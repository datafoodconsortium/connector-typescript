import IOrganization from "./IOrganization.js";
import ICertification from "./ICertification.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Certification extends SemanticObject implements ICertification {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        certificationReferences?: string[];
        certificationScores?: string[];
        operatorIds?: string[];
        certifiedOrganizations?: IOrganization[];
        name?: string;
        description?: string;
        doNotStore?: boolean;
    });
    getOpereratorIds(): string[];
    setCertificationReferences(certificationReferences: string[]): void;
    setOperatorIds(operatorIds: string[]): void;
    getDescription(): string | undefined;
    getCertificationReferences(): string[];
    addCertificationScore(certificationReference: string): void;
    getCertifiedOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
    removeCertifiedOrganization(certifiedOrganization: IOrganization): void;
    addOperatorId(operatorId: string): void;
    setCertifiedOrganizations(certifiedOrganizations: IOrganization[]): void;
    getName(): string | undefined;
    removeCertificationReference(certificationReference: string): void;
    setDescription(description: string): void;
    addCertificationReference(certificationReference: string): void;
    setCertificationScores(certificationReferences: string[]): void;
    setName(name: string): void;
    removeOperatorId(operatorId: string): void;
    addCertifiedOrganization(certifiedOrganization: IOrganization): void;
    getCertificationScores(): string[];
    removeCertificationScore(certificationReference: string): void;
}
//# sourceMappingURL=Certification.d.ts.map