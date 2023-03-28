import ITechnicalProduct from "./ITechnicalProduct.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface TechnicalProductProposer {

	getProposedTechnicalProducts(): Promise<Array<ITechnicalProduct>>
	;
	proposeTechnicalProducts(technicalProducts: ITechnicalProduct): void;
	unproposeTechnicalProducts(technicalProducts: ITechnicalProduct): void;

}
