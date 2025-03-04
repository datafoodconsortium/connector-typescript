import Describable from "./Describable.js";
import IQuantity from "./IQuantity.js";
import Proposable from "./Proposable.js";
import Nameable from "./Nameable.js";
import ISKOSConcept from "./ISKOSConcept.js";
import Manufacturable from "./Manufacturable.js";
import Certifiable from "./Certifiable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IDefinedProduct extends Semanticable, Manufacturable, Proposable, Nameable, Describable, Certifiable {
    addClaim(claim: ISKOSConcept): void;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
    getClaims(): Promise<ISKOSConcept[]>;
    getProductType(): Promise<ISKOSConcept | undefined>;
    setProductType(productType: ISKOSConcept): void;
    removeClaim(claim: ISKOSConcept): void;
    addImage(image: string): void;
    removeImage(image: string): void;
    getImages(): string[];
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