import ICertification from "./ICertification.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Certifiable {
    addCertification(certification: (ICertification & Semanticable)): void;
    getCertifications(): IterableIterator<(ICertification & Semanticable)>;
}
//# sourceMappingURL=Certifiable.d.ts.map