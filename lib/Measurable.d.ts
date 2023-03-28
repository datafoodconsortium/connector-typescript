import ICharacteristicDimension from "./ICharacteristicDimension.js";
export default interface Measurable {
    getQuantityDimension(): Promise<ICharacteristicDimension | undefined>;
    setQuantityDimension(quantityDimension: ICharacteristicDimension): void;
}
//# sourceMappingURL=Measurable.d.ts.map