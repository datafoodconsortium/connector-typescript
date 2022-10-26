import IPhysicalDimension from "./IPhysicalDimension.js"
import Characteristic from "./Characteristic.js"
import ICharacteristicDimension from "./ICharacteristicDimension.js"
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"


export default class PhysicalCharacteristic extends Characteristic implements IPhysicalCharacteristic {

	private physicalDimension: (IPhysicalDimension & Semanticable);

	constructor(quantityUnit: string, quantityValue: number, physicalDimension: (IPhysicalDimension & Semanticable)) {
		super(quantityUnit, quantityValue);
		this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#PhysicalCharacteristic");
		this.physicalDimension = physicalDimension;
		
		this.registerSemanticProperty("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#hasPhysicalDimension", () => this.getQuantityDimension());
	}
	

	getQuantityDimension(): (ICharacteristicDimension & Semanticable) {
		return this.physicalDimension;
	}
	

	setQuantityDimension(quantityDimension: (ICharacteristicDimension & Semanticable)): void {
		this.physicalDimension = quantityDimension;
	}
	


}
