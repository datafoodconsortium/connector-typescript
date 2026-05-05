import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class ValueRecur extends SemanticObject {
    protected connector: IConnector;
    getByDay(): string | undefined;
    setByDay(byDay: string): void;
    getByMonth(): string | undefined;
    setByMonth(byMonth: string): void;
    getFreq(): string | undefined;
    setFreq(freq: string): void;
    getInterval(): number | undefined;
    setInterval(interval: number): void;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        byDay?: string;
        byMonth?: string;
        freq?: string;
        interval?: number;
        doNotStore?: boolean;
    });
}
//# sourceMappingURL=ValueRecur.d.ts.map