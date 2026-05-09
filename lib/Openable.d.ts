import IOpeningHoursSpecification from "./IOpeningHoursSpecification.js";
export default interface Openable {
    getOpeningHours(): Promise<IOpeningHoursSpecification[]>;
    setOpeningHours(openingHours: IOpeningHoursSpecification[]): void;
    addOpeningHour(openingHour: IOpeningHoursSpecification): void;
    removeOpeningHour(openingHour: IOpeningHoursSpecification): void;
}
//# sourceMappingURL=Openable.d.ts.map