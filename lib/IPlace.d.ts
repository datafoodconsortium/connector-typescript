import Nameable from "./Nameable.js";
import Describable from "./Describable.js";
import ISaleSession from "./ISaleSession.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IPlace extends Semanticable, Describable, Nameable {
    getHostedSaleSessions(): Promise<ISaleSession[]>;
    addHostedSaleSession(saleSession: ISaleSession): void;
    removeHostedSaleSession(): ISaleSession | undefined;
    setHostedSaleSessions(saleSessions: ISaleSession[]): void;
}
//# sourceMappingURL=IPlace.d.ts.map