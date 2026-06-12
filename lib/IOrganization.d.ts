import CatalogMaintainer from "./CatalogMaintainer.js";
import Nameable from "./Nameable.js";
import Taxable from "./Taxable.js";
import Describable from "./Describable.js";
import CatalogItemManager from "./CatalogItemManager.js";
import Onboardable from "./Onboardable.js";
import ITemplateSaleSession from "./ITemplateSaleSession.js";
import MainContactOwner from "./MainContactOwner.js";
import TechnicalProductProposer from "./TechnicalProductProposer.js";
import ICertification from "./ICertification.js";
import ProductSupplier from "./ProductSupplier.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IOrganization extends Semanticable, Taxable, CatalogMaintainer, Nameable, CatalogItemManager, Describable, TechnicalProductProposer, ProductSupplier, MainContactOwner, Onboardable {
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