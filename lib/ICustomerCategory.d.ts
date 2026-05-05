import Describable from "./Describable.js";
import IAgent from "./IAgent.js";
import Groupable from "./Groupable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ICustomerCategory extends Semanticable, Describable, Groupable {
    addMember(member: IAgent): void;
    getMembers(): Promise<IAgent[]>;
    setMembers(members: IAgent[]): void;
    removeMember(member: IAgent): void;
}
//# sourceMappingURL=ICustomerCategory.d.ts.map