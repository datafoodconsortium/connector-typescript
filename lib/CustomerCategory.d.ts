import ICustomerCategory from "./ICustomerCategory.js";
import IAgent from "./IAgent.js";
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
    getDescription(): string | undefined;
    getName(): string | undefined;
    setDescription(description: string): void;
    addMember(member: IAgent): void;
    setName(name: string): void;
    setMembers(members: IAgent[]): void;
    removeMember(member: IAgent): void;
    getMembers(options?: IGetterOptions): Promise<IAgent[]>;
}
//# sourceMappingURL=CustomerCategory.d.ts.map