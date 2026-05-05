import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import Datable from "./Datable.js";
import IProductOption from "./IProductOption.js";
import IProductOptionValue from "./IProductOptionValue.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IVariantCharacteristic extends Semanticable, Datable, Nameable, Describable {
    getProductOption(): Promise<IProductOption | undefined>;
    setProductOption(productOption: IProductOption): void;
    getProductOptionValue(): Promise<IProductOptionValue | undefined>;
    setProductOptionValue(productOptionValue: IProductOptionValue): void;
}
//# sourceMappingURL=IVariantCharacteristic.d.ts.map