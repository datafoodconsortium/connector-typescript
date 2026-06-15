import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import Payable from "./Payable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IPaymentMethod extends Semanticable, Payable, Describable, Nameable {
    getProvider(): string | undefined;
    setProvider(provider: string): void;
    getType(): string | undefined;
    setType(type: string): void;
}
//# sourceMappingURL=IPaymentMethod.d.ts.map