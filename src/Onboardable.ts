import ICustomerCategory from "./ICustomerCategory.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Onboardable {

	getCustomerCategories(): IterableIterator<(ICustomerCategory & Semanticable)>;
	addCustomerCategory(customerCategory: (ICustomerCategory & Semanticable)): void;

}
