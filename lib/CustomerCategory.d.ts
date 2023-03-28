import ICustomerCategory from "./ICustomerCategory.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class CustomerCategory extends SemanticObject implements ICustomerCategory {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        description?: string;
        doNotStore?: boolean;
    });
    setDescription(description: string): void;
    getDescription(): string;
}
//# sourceMappingURL=CustomerCategory.d.ts.map