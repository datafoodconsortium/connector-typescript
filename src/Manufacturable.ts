import INutrientCharacteristic from "./INutrientCharacteristic.js"
import IPartOrigin from "./IPartOrigin.js"
import IAllergenCharacteristic from "./IAllergenCharacteristic.js"
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js"
import IGeographicalOrigin from "./IGeographicalOrigin.js"
import INatureOrigin from "./INatureOrigin.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Manufacturable {

	getAlcoholPercentage(): number
	;
	getLifetime(): string
	;
	getUsageOrStorageConditions(): string
	;
	getAllergenCharacteristics(): Promise<Array<IAllergenCharacteristic>>
	;
	getNutrientCharacteristics(): Promise<Array<INutrientCharacteristic>>
	;
	getPhysicalCharacteristics(): Promise<Array<IPhysicalCharacteristic>>
	;
	getGeographicalOrigin(): Promise<IGeographicalOrigin | undefined>
	;
	getNatureOrigin(): Promise<Array<INatureOrigin>>
	;
	getPartOrigin(): Promise<Array<IPartOrigin>>
	;
	setGeographicalOrigin(geographicalOrigin: IGeographicalOrigin): void;
	setAlcoholPercentage(alcoholPercentage: number): void;
	setLifetime(lifetime: string): void;
	setUsageOrStorageConditions(usageOrStorageConditions: string): void;
	addAllergenCharacteristic(allergenCharacteristic: IAllergenCharacteristic): void;
	addNutrientCharacteristic(nutrientCharacteristic: INutrientCharacteristic): void;
	addPhysicalCharacteristic(physicalCharacteristic: IPhysicalCharacteristic): void;
	addNatureOrigin(natureOrigin: INatureOrigin): void;
	addPartOrigin(partOrigin: IPartOrigin): void;
	removeAllergenCharacteristic(allergenCharacteristic: IAllergenCharacteristic): void;
	removeNutrientCharacteristic(nutrientCharacteristic: INutrientCharacteristic): void;
	removePhysicalCharacteristic(physicalCharacteristic: IPhysicalCharacteristic): void;
	removeNatureOrigin(natureOrigin: INatureOrigin): void;
	removePartOrigin(partOrigin: IPartOrigin): void;

}
