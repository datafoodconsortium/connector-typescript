import Nameable from "./Nameable.js";
import Employer from "./Employer.js";
import Taxable from "./Taxable.js";
import Describable from "./Describable.js";
import CatalogMaintainer from "./CatalogMaintainer.js";
import CatalogItemManager from "./CatalogItemManager.js";
import TechnicalProductProposer from "./TechnicalProductProposer.js";
import MainContactOwner from "./MainContactOwner.js";
import ProductSupplier from "./ProductSupplier.js";
import Onboardable from "./Onboardable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IEnterprise extends Semanticable, MainContactOwner, Nameable, CatalogItemManager, TechnicalProductProposer, CatalogMaintainer, Describable, Taxable, ProductSupplier, Employer, Onboardable {
}
//# sourceMappingURL=IEnterprise.d.ts.map