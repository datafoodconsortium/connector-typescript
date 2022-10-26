import Invoiceable from "./Invoiceable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Orderable {

	getCustomer(): (Invoiceable & Semanticable);

}
