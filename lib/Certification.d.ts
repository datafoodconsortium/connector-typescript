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
    addCertificationScore(certificationReference: string): void;
    getName(): string | undefined;
    getCertificationReferences(): string[];
    setName(name: string): void;
    removeCertificationReference(certificationReference: string): void;
    getCertificationScores(): string[];
    removeCertifiedOrganization(certifiedOrganization: IOrganization): void;
    addOperatorId(operatorId: string): void;
    addCertifiedOrganization(certifiedOrganization: IOrganization): void;
    getDescription(): string | undefined;
    setCertificationScores(certificationReferences: string[]): void;
    setDescription(description: string): void;
    setCertifiedOrganizations(certifiedOrganizations: IOrganization[]): void;
    setCertificationReferences(certificationReferences: string[]): void;
    getOpereratorIds(): string[];
    removeCertificationScore(certificationReference: string): void;
    removeOperatorId(operatorId: string): void;
    addCertificationReference(certificationReference: string): void;
    getCertifiedOrganizations(options?: IGetterOptions): Promise<IOrganization[]>;
    setOperatorIds(operatorIds: string[]): void;
}
//# sourceMappingURL=Certification.d.ts.map