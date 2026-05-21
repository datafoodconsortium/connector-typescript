import TechnicalProductProposer from "./TechnicalProductProposer.js";
import Onboardable from "./Onboardable.js";
import CatalogItemManager from "./CatalogItemManager.js";
import MainContactOwner from "./MainContactOwner.js";
import ProductSupplier from "./ProductSupplier.js";
import CatalogMaintainer from "./CatalogMaintainer.js";
import Taxable from "./Taxable.js";
import Describable from "./Describable.js";
import Nameable from "./Nameable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IEnterprise extends Semanticable, CatalogMaintainer, Describable, Nameable, TechnicalProductProposer, MainContactOwner, CatalogItemManager, Onboardable, ProductSupplier, Taxable {
}
//# sourceMappingURL=IEnterprise.d.ts.map