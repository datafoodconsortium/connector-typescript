import INutrientCharacteristic from "./INutrientCharacteristic.js"
import Characteristic from "./Characteristic.js"
import ICharacteristicDimension from "./ICharacteristicDimension.js"
import INutrientDimension from "./INutrientDimension.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"


export default class NutrientCharacteristic extends Characteristic implements INutrientCharacteristic {

	private nutrientDimension: (INutrientDimension & Semanticable);

	constructor(quantityUnit: string, quantityValue: number, nutrientDimension: (INutrientDimension & Semanticable)) {
		super(quantityUnit, quantityValue);
		this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#NutrientCharacteristic");
		this.nutrientDimension = nutrientDimension;
		
		this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasNutrientDimension", () => this.getQuantityDimension());
	}
	

	getQuantityDimension(): (ICharacteristicDimension & Semanticable) {
		return this.nutrientDimension;
	}
	

	setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void {
		this.nutrientDimension = quantityDimension;
	}
	


}
