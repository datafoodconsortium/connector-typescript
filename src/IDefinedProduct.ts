import Claimable from "./Claimable.js"
import Certifiable from "./Certifiable.js"
import Quantifiable from "./Quantifiable.js"
import IProductType from "./IProductType.js"
import Manufacturable from "./Manufacturable.js"
import Proposable from "./Proposable.js"
import Nameable from "./Nameable.js"
import Describable from "./Describable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IDefinedProduct extends Describable, Nameable, Manufacturable, Proposable, Certifiable {

	addClaim(claim: (Claimable & Semanticable)): void;
	getQuantity(): (Quantifiable & Semanticable) | undefined;
	setQuantity(quantity: (Quantifiable & Semanticable)): void;
	getClaims(): IterableIterator<(Claimable & Semanticable)>;
	getProductType(): (IProductType & Semanticable) | undefined;
	setProductType(productType: (IProductType & Semanticable)): void;

}
