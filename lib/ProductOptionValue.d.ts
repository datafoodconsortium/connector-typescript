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
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDate(date: string): void;
    setDescription(description: string): void;
    setName(name: string): void;
    getDate(): string | undefined;
}
//# sourceMappingURL=ProductOptionValue.d.ts.map