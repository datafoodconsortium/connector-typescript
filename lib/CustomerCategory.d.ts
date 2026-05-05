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
        description?: string;
        members?: IAgent[];
        doNotStore?: boolean;
    });
    addMember(member: IAgent): void;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    removeMember(member: IAgent): void;
    setMembers(members: IAgent[]): void;
    getMembers(options?: IGetterOptions): Promise<IAgent[]>;
}
//# sourceMappingURL=CustomerCategory.d.ts.map