import IProductOption from "./IProductOption.js";
import IProductOptionValue from "./IProductOptionValue.js";
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
    getName(): string | undefined;
    addReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
    getDescription(): string | undefined;
    setDate(date: string): void;
    setDescription(description: string): void;
    removeReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
    setName(name: string): void;
    setReferenceProductionOptionValue(productOptionValues: IProductOptionValue[]): void;
    getReferenceProductionOptionValue(options?: IGetterOptions): Promise<IProductOptionValue[]>;
    getDate(): string | undefined;
}
//# sourceMappingURL=ProductOption.d.ts.map