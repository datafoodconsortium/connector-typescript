/*
 * MIT License
 * 
 * Copyright (c) 2023 Maxime Lecoq <maxime@lecoqlibre.fr>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
*/
import IAllergenCharacteristic from "./IAllergenCharacteristic.js"
import INutrientCharacteristic from "./INutrientCharacteristic.js"
import ISKOSConcept from "./ISKOSConcept.js"
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js"

import { Semanticable } from "@virtual-assembly/semantizer"

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
