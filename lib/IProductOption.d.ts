import Datable from "./Datable.js";
import Nameable from "./Nameable.js";
import IProductOptionValue from "./IProductOptionValue.js";
import Describable from "./Describable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IProductOption extends Semanticable, Describable, Datable, Nameable {
    getReferenceProductionOptionValue(): Promise<IProductOptionValue[]>;
    setReferenceProductionOptionValue(productOptionValues: IProductOptionValue[]): void;
    addReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
    removeReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
}
//# sourceMappingURL=IProductOption.d.ts.map