import Describable from "./Describable.js";
import Onboardable from "./Onboardable.js";
import CatalogMaintainer from "./CatalogMaintainer.js";
import Taxable from "./Taxable.js";
import Nameable from "./Nameable.js";
import MainContactOwner from "./MainContactOwner.js";
import ProductSupplier from "./ProductSupplier.js";
import CatalogItemManager from "./CatalogItemManager.js";
import TechnicalProductProposer from "./TechnicalProductProposer.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IEnterprise extends Semanticable, Describable, Nameable, Onboardable, TechnicalProductProposer, MainContactOwner, CatalogMaintainer, Taxable, ProductSupplier, CatalogItemManager {
}
//# sourceMappingURL=IEnterprise.d.ts.map