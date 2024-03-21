import Nameable from "./Nameable.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface ISocialMedia extends Semanticable, Nameable {
    getUrl(): string | undefined;
    setUrl(url: string): void;
}
//# sourceMappingURL=ISocialMedia.d.ts.map