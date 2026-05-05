import Describable from "./Describable.js";
import Onboardable from "./Onboardable.js";
import TechnicalProductProposer from "./TechnicalProductProposer.js";
import CatalogItemManager from "./CatalogItemManager.js";
import ProductSupplier from "./ProductSupplier.js";
import Taxable from "./Taxable.js";
import Nameable from "./Nameable.js";
import CatalogMaintainer from "./CatalogMaintainer.js";
import MainContactOwner from "./MainContactOwner.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IEnterprise extends Semanticable, Describable, ProductSupplier, CatalogItemManager, MainContactOwner, Nameable, TechnicalProductProposer, Taxable, CatalogMaintainer, Onboardable {
}
//# sourceMappingURL=IEnterprise.d.ts.map