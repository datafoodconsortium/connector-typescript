import IProductOptionValue from "./IProductOptionValue.js";
import IProductOption from "./IProductOption.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class ProductOption extends SemanticObject implements IProductOption {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        date?: string;
        referenceProductionOptionValue?: IProductOptionValue[];
        doNotStore?: boolean;
    });
    getDate(): string | undefined;
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    addReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
    setName(name: string): void;
    removeReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
    setDate(date: string): void;
    setReferenceProductionOptionValue(productOptionValues: IProductOptionValue[]): void;
    getReferenceProductionOptionValue(options?: IGetterOptions): Promise<IProductOptionValue[]>;
}
//# sourceMappingURL=ProductOption.d.ts.map