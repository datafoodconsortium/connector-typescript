import IProductOptionValue from "./IProductOptionValue.js";
import IProductOption from "./IProductOption.js";
import IVariantCharacteristic from "./IVariantCharacteristic.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class VariantCharacteristic extends SemanticObject implements IVariantCharacteristic {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        date?: string;
        productOption?: IProductOption;
        productOptionValue?: IProductOptionValue;
        doNotStore?: boolean;
    });
    getDate(): string | undefined;
    getName(): string | undefined;
    getProductOption(options?: IGetterOptions): Promise<IProductOption | undefined>;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    getProductOptionValue(options?: IGetterOptions): Promise<IProductOptionValue | undefined>;
    setName(name: string): void;
    setDate(date: string): void;
    setProductOption(productOption: IProductOption): void;
    setProductOptionValue(productOptionValue: IProductOptionValue): void;
}
//# sourceMappingURL=VariantCharacteristic.d.ts.map