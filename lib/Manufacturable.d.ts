import INatureOrigin from "./INatureOrigin.js";
import IGeographicalOrigin from "./IGeographicalOrigin.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import IPartOrigin from "./IPartOrigin.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
export default interface Manufacturable {
    getAlcoholPercentage(): number;
    getLifetime(): string;
    getUsageOrStorageConditions(): string;
    getAllergenCharacteristics(): IterableIterator<(IAllergenCharacteristic & Semanticable)>;
    getNutrientCharacteristics(): IterableIterator<(INutrientCharacteristic & Semanticable)>;
    getPhysicalCharacteristics(): IterableIterator<(IPhysicalCharacteristic & Semanticable)>;
    getGeographicalOrigin(): (IGeographicalOrigin & Semanticable) | undefined;
    getNatureOrigin(): IterableIterator<(INatureOrigin & Semanticable)>;
    getPartOrigin(): IterableIterator<(IPartOrigin & Semanticable)>;
    addAllergenCharacteristic(allergenCharacteristic: (IAllergenCharacteristic & Semanticable)): void;
    addNutrientCharacteristic(nutrientCharacteristic: (INutrientCharacteristic & Semanticable)): void;
    addPhysicalCharacteristic(physicalCharacteristic: (IPhysicalCharacteristic & Semanticable)): void;
    addNatureOrigin(natureOrigin: (INatureOrigin & Semanticable)): void;
    addPartOrigin(partOrigin: (IPartOrigin & Semanticable)): void;
    setGeographicalOrigin(geographicalOrigin: (IGeographicalOrigin & Semanticable)): void;
}
//# sourceMappingURL=Manufacturable.d.ts.map