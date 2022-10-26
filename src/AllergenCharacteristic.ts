import IAllergenDimension from "./IAllergenDimension.js"
import IAllergenCharacteristic from "./IAllergenCharacteristic.js"
import ICharacteristicDimension from "./ICharacteristicDimension.js"
import Characteristic from "./Characteristic.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"


export default class AllergenCharacteristic extends Characteristic implements IAllergenCharacteristic {

	private allergenDimension: (IAllergenDimension & Semanticable);

	constructor(quantityUnit: string, quantityValue: number, allergenDimension: (IAllergenDimension & Semanticable)) {
		super(quantityUnit, quantityValue);
		this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#AllergenCharacteristic");
		this.allergenDimension = allergenDimension;
		
		this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasAllergenDimension", () => this.getQuantityDimension());
	}
	

	getQuantityDimension(): (ICharacteristicDimension & Semanticable) {
		return this.allergenDimension;
	}
	

	setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void {
		this.allergenDimension = quantityDimension;
	}
	


}
