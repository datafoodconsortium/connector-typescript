import IAgent from "./IAgent.js";
import ICustomerCategory from "./ICustomerCategory.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class CustomerCategory extends SemanticObject implements ICustomerCategory {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        members?: IAgent[];
        doNotStore?: boolean;
    });
    setMembers(members: IAgent[]): void;
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    setName(name: string): void;
    getMembers(options?: IGetterOptions): Promise<IAgent[]>;
    removeMember(member: IAgent): void;
    addMember(member: IAgent): void;
}
//# sourceMappingURL=CustomerCategory.d.ts.map