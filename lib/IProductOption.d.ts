import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import Datable from "./Datable.js";
import IProductOptionValue from "./IProductOptionValue.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IProductOption extends Semanticable, Nameable, Datable, Describable {
    getReferenceProductionOptionValue(): Promise<IProductOptionValue[]>;
    setReferenceProductionOptionValue(productOptionValues: IProductOptionValue[]): void;
    addReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
    removeReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
}
//# sourceMappingURL=IProductOption.d.ts.map