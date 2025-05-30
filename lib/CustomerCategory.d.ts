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
    getDescription(): string | undefined;
    setDescription(description: string): void;
}
//# sourceMappingURL=CustomerCategory.d.ts.map