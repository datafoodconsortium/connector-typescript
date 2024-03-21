import Certifiable from "./Certifiable.js";
import ISKOSConcept from "./ISKOSConcept.js";
import Proposable from "./Proposable.js";
import Describable from "./Describable.js";
import Nameable from "./Nameable.js";
import IQuantity from "./IQuantity.js";
import Manufacturable from "./Manufacturable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IDefinedProduct extends Semanticable, Describable, Certifiable, Proposable, Nameable, Manufacturable {
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
}
//# sourceMappingURL=IDefinedProduct.d.ts.map