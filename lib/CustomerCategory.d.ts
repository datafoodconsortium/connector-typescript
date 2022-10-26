import ICustomerCategory from "./ICustomerCategory.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
export default class CustomerCategory extends SemanticObject implements ICustomerCategory {
    private name;
    private description;
    constructor(name: string, description: string);
    getDescription(): string;
    setDescription(description: string): void;
    getName(): string;
    setName(name: string): void;
}
//# sourceMappingURL=CustomerCategory.d.ts.map