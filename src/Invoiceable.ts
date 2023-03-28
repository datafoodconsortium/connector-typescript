import Orderable from "./Orderable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Invoiceable {

	getOrders(): Promise<Array<Orderable>>
	;

}
