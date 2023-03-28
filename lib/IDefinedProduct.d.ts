import IProductType from "./IProductType.js";
import Certifiable from "./Certifiable.js";
import Manufacturable from "./Manufacturable.js";
import Proposable from "./Proposable.js";
import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import IQuantity from "./IQuantity.js";
import IClaim from "./IClaim.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IDefinedProduct extends Semanticable, Proposable, Describable, Certifiable, Manufacturable, Nameable {
    addClaim(claim: IClaim): void;
    getQuantity(): Promise<IQuantity | undefined>;
    setQuantity(quantity: IQuantity): void;
    getClaims(): Promise<Array<IClaim>>;
    getProductType(): Promise<IProductType | undefined>;
    setProductType(productType: IProductType): void;
    removeClaim(claim: IClaim): void;
}
//# sourceMappingURL=IDefinedProduct.d.ts.map