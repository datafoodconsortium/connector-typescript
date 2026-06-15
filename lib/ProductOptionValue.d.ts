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
    getDate(): string | undefined;
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    setName(name: string): void;
    setDate(date: string): void;
}
//# sourceMappingURL=ProductOptionValue.d.ts.map