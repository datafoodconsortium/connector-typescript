import Nameable from "./Nameable.js";
import Exhibitable from "./Exhibitable.js";
import ISKOSConcept from "./ISKOSConcept.js";
import Describable from "./Describable.js";
import Proposable from "./Proposable.js";
import IQuantity from "./IQuantity.js";
import Certifiable from "./Certifiable.js";
import Manufacturable from "./Manufacturable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IDefinedProduct extends Semanticable, Nameable, Manufacturable, Exhibitable, Proposable, Certifiable, Describable {
    addClaim(claim: ISKOSConcept): void;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
    getClaims(): Promise<ISKOSConcept[]>;
    getProductType(): Promise<ISKOSConcept | undefined>;
    setProductType(productType: ISKOSConcept): void;
    removeClaim(claim: ISKOSConcept): void;
    addVariant(variant: IDefinedProduct): void;
    getVariants(): Promise<IDefinedProduct[]>;
    setVariants(variants: IDefinedProduct[]): void;
    removeVariant(variant: IDefinedProduct): void;
    addIsVariantOf(parent: IDefinedProduct): void;
    getIsVariantOf(): Promise<IDefinedProduct[]>;
    setIsVariantOf(parents: IDefinedProduct[]): void;
    removeIsVariantOf(parent: IDefinedProduct): void;
}
//# sourceMappingURL=IDefinedProduct.d.ts.map