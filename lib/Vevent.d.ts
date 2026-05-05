import ValueRecur from "./ValueRecur.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Vevent extends SemanticObject {
    protected connector: IConnector;
    getStart(): string | undefined;
    setStart(start: string): void;
    getEnd(): string | undefined;
    setEnd(end: string): void;
    getRule(options?: IGetterOptions): Promise<ValueRecur | undefined>;
    setRule(rule: ValueRecur): void;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        start?: string;
        end?: string;
        rule?: ValueRecur;
        doNotStore?: boolean;
    });
}
//# sourceMappingURL=Vevent.d.ts.map