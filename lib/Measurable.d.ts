import ISKOSConcept from "./ISKOSConcept.js";
export default interface Measurable {
    getQuantityDimension(): Promise<ISKOSConcept | undefined>;
    setQuantityDimension(quantityDimension: ISKOSConcept): void;
}
//# sourceMappingURL=Measurable.d.ts.map