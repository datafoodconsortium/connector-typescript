import ISKOSConcept from "./ISKOSConcept.js";
export default interface Quantifiable {
    getQuantityUnit(): Promise<ISKOSConcept | undefined>;
    getQuantityValue(): number | undefined;
    setQuantityUnit(quantityUnit: ISKOSConcept): void;
    setQuantityValue(quantityValue: number): void;
}
//# sourceMappingURL=Quantifiable.d.ts.map