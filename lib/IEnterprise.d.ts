import Onboardable from "./Onboardable.js";
import ProductSupplier from "./ProductSupplier.js";
import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import Taxable from "./Taxable.js";
import CatalogMaintainer from "./CatalogMaintainer.js";
import TechnicalProductProposer from "./TechnicalProductProposer.js";
import MainContactOwner from "./MainContactOwner.js";
import CatalogItemManager from "./CatalogItemManager.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IEnterprise extends Semanticable, TechnicalProductProposer, ProductSupplier, Describable, Nameable, MainContactOwner, Onboardable, CatalogMaintainer, CatalogItemManager, Taxable {
}
//# sourceMappingURL=IEnterprise.d.ts.map