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
    addReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
    getDescription(): string | undefined;
    getName(): string | undefined;
    getReferenceProductionOptionValue(options?: IGetterOptions): Promise<IProductOptionValue[]>;
    setDescription(description: string): void;
    setDate(date: string): void;
    getDate(): string | undefined;
    setName(name: string): void;
    removeReferenceProductionOptionValue(productOptionValue: IProductOptionValue): void;
    setReferenceProductionOptionValue(productOptionValues: IProductOptionValue[]): void;
}
//# sourceMappingURL=ProductOption.d.ts.map