import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import ISKOSConcept from "./ISKOSConcept.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
export default interface Manufacturable {
    getAlcoholPercentage(): number | undefined;
    getLifetime(): string | undefined;
    getUsageOrStorageConditions(): string | undefined;
    getAllergenCharacteristics(): Promise<IAllergenCharacteristic[]>;
    getNutrientCharacteristics(): Promise<INutrientCharacteristic[]>;
    getPhysicalCharacteristics(): Promise<IPhysicalCharacteristic[]>;
    getGeographicalOrigin(): Promise<ISKOSConcept | undefined>;
    getNatureOrigin(): Promise<ISKOSConcept[]>;
    getPartOrigin(): Promise<ISKOSConcept[]>;
    setGeographicalOrigin(geographicalOrigin: ISKOSConcept): void;
    setAlcoholPercentage(alcoholPercentage: number): void;
    setLifetime(lifetime: string): void;
    setUsageOrStorageConditions(usageOrStorageConditions: string): void;
    addAllergenCharacteristic(allergenCharacteristic: IAllergenCharacteristic): void;
    addNutrientCharacteristic(nutrientCharacteristic: INutrientCharacteristic): void;
    addPhysicalCharacteristic(physicalCharacteristic: IPhysicalCharacteristic): void;
    addNatureOrigin(natureOrigin: ISKOSConcept): void;
    addPartOrigin(partOrigin: ISKOSConcept): void;
    removeAllergenCharacteristic(allergenCharacteristic: IAllergenCharacteristic): void;
    removeNutrientCharacteristic(nutrientCharacteristic: INutrientCharacteristic): void;
    removePhysicalCharacteristic(physicalCharacteristic: IPhysicalCharacteristic): void;
    removeNatureOrigin(natureOrigin: ISKOSConcept): void;
    removePartOrigin(partOrigin: ISKOSConcept): void;
}
//# sourceMappingURL=Manufacturable.d.ts.map