import Manufacturable from "./Manufacturable.js";
import Proposable from "./Proposable.js";
import Nameable from "./Nameable.js";
import Exhibitable from "./Exhibitable.js";
import ISKOSConcept from "./ISKOSConcept.js";
import Certifiable from "./Certifiable.js";
import Describable from "./Describable.js";
import IProductOption from "./IProductOption.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IDefinedProduct extends Semanticable, Proposable, Certifiable, Exhibitable, Nameable, Describable, Manufacturable {
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
    addReferenceProductOption(referenceProductOption: IProductOption): void;
    getReferenceProductOptions(): Promise<IProductOption[]>;
    setReferenceProductOptions(referenceProductOptions: IProductOption[]): void;
    removeReferenceProductOption(referenceProductOption: IProductOption): void;
    setClaims(claims: ISKOSConcept[]): void;
}
//# sourceMappingURL=IDefinedProduct.d.ts.map