import ProductSupplier from "./ProductSupplier.js";
import CatalogItemManager from "./CatalogItemManager.js";
import Nameable from "./Nameable.js";
import ICertification from "./ICertification.js";
import MainContactOwner from "./MainContactOwner.js";
import Describable from "./Describable.js";
import Taxable from "./Taxable.js";
import Onboardable from "./Onboardable.js";
import ITemplateSaleSession from "./ITemplateSaleSession.js";
import TechnicalProductProposer from "./TechnicalProductProposer.js";
import CatalogMaintainer from "./CatalogMaintainer.js";
import Employer from "./Employer.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IOrganization extends Semanticable, Describable, Employer, Onboardable, ProductSupplier, CatalogMaintainer, TechnicalProductProposer, Taxable, CatalogItemManager, Nameable, MainContactOwner {
    addTemplateSaleSession(templateSaleSession: ITemplateSaleSession): void;
    removeTemplateSaleSession(templateSaleSession: ITemplateSaleSession): void;
    setTemplateSaleSessions(templateSaleSessions: ITemplateSaleSession[]): void;
    getTemplateSaleSessions(): Promise<ITemplateSaleSession[]>;
    addCertification(certification: ICertification): void;
    getCertifications(): Promise<ICertification[]>;
    setCertifications(certifications: ICertification[]): void;
    removeCertification(certification: ICertification): void;
}
//# sourceMappingURL=IOrganization.d.ts.map