import ICertification from "./ICertification.js";
import IOrganization from "./IOrganization.js";
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
    getDescription(): string | undefined;
    setOperatorIds(operatorIds: string[]): void;
    getCertificationReferences(): string[];
    setCertificationReferences(certificationReferences: string[]): void;
    setCertificationScores(certificationReferences: string[]): void;
    getOpereratorIds(): string[];
    addCertificationReference(certificationReference: string): void;
    getCertifiedOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
    removeOperatorId(operatorId: string): void;
    getName(): string | undefined;
    getCertificationScores(): string[];
    setDescription(description: string): void;
    removeCertifiedOrganization(certifiedOrganization: IOrganization): void;
    setName(name: string): void;
    removeCertificationReference(certificationReference: string): void;
    addCertificationScore(certificationReference: string): void;
    removeCertificationScore(certificationReference: string): void;
    addCertifiedOrganization(certifiedOrganization: IOrganization): void;
    setCertifiedOrganizations(certifiedOrganizations: IOrganization[]): void;
    addOperatorId(operatorId: string): void;
}
//# sourceMappingURL=Certification.d.ts.map