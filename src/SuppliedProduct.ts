import DefinedProduct from "./DefinedProduct.js"
import { SemanticObject } from "@virtual-assembly/semantizer"
import { Semanticable } from "@virtual-assembly/semantizer"

export default class SuppliedProduct extends DefinedProduct {


	constructor(name: string, description: string) {
		super(name, description);
		this.setSemanticType("http://static.datafoodconsortium.org/ontologies/DFC_BusinessOntology.owl#SuppliedProduct");
		
		
		
	}
	


}
