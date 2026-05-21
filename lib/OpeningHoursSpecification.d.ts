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
    setCloses(closes: string): void;
    getDayOfWeek(): string | undefined;
    getCloses(): string | undefined;
    setOpens(opens: string): void;
    getOpens(): string | undefined;
    setDayOfWeek(dayOfWeek: string): void;
}
//# sourceMappingURL=OpeningHoursSpecification.d.ts.map