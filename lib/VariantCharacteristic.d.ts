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
    getProductOption(options?: IGetterOptions): Promise<IProductOption | undefined>;
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDate(date: string): void;
    setDescription(description: string): void;
    setProductOptionValue(productOptionValue: IProductOptionValue): void;
    setName(name: string): void;
    getDate(): string | undefined;
    getProductOptionValue(options?: IGetterOptions): Promise<IProductOptionValue | undefined>;
    setProductOption(productOption: IProductOption): void;
}
//# sourceMappingURL=VariantCharacteristic.d.ts.map