import { Semanticable } from "@virtual-assembly/semantizer";
export default interface IOpeningHoursSpecification extends Semanticable {
    getDayOfWeek(): string | undefined;
    setDayOfWeek(dayOfWeek: string): void;
    getOpens(): string | undefined;
    setOpens(opens: string): void;
    getCloses(): string | undefined;
    setCloses(closes: string): void;
}
//# sourceMappingURL=IOpeningHoursSpecification.d.ts.map