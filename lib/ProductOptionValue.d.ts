import IProductOptionValue from "./IProductOptionValue.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class ProductOptionValue extends SemanticObject implements IProductOptionValue {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        date?: string;
        doNotStore?: boolean;
    });
    getDescription(): string | undefined;
    getName(): string | undefined;
    setDescription(description: string): void;
    setDate(date: string): void;
    getDate(): string | undefined;
    setName(name: string): void;
}
//# sourceMappingURL=ProductOptionValue.d.ts.map