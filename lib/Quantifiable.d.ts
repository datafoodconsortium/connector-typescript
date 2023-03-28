import IUnit from "./IUnit.js";
export default interface Quantifiable {
    getQuantityUnit(): Promise<IUnit | undefined>;
    getQuantityValue(): number;
    setQuantityUnit(quantityUnit: IUnit): void;
    setQuantityValue(quantityValue: number): void;
}
//# sourceMappingURL=Quantifiable.d.ts.map