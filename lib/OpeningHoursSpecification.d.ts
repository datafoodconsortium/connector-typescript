import IOpeningHoursSpecification from "./IOpeningHoursSpecification.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class OpeningHoursSpecification extends SemanticObject implements IOpeningHoursSpecification {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        dayOfWeek?: string;
        opens?: string;
        closes?: string;
        doNotStore?: boolean;
    });
    getDayOfWeek(): string | undefined;
    getCloses(): string | undefined;
    setDayOfWeek(dayOfWeek: string): void;
    setOpens(opens: string): void;
    setCloses(closes: string): void;
    getOpens(): string | undefined;
}
//# sourceMappingURL=OpeningHoursSpecification.d.ts.map