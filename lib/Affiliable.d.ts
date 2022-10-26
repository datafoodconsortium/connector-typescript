import Onboardable from "./Onboardable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Affiliable {
    getAffiliatedOrganizations(): IterableIterator<(Onboardable & Semanticable)>;
    affiliateTo(organization: (Onboardable & Semanticable)): void;
    leaveAffiliatedOrganization(organization: (Onboardable & Semanticable)): void;
}
//# sourceMappingURL=Affiliable.d.ts.map