import Payable from "./Payable.js";
import Describable from "./Describable.js";
import Nameable from "./Nameable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IPaymentMethod extends Semanticable, Nameable, Describable, Payable {
    getProvider(): string | undefined;
    setProvider(provider: string): void;
    getType(): string | undefined;
    setType(type: string): void;
}
//# sourceMappingURL=IPaymentMethod.d.ts.map