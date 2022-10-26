import Marketable from "./Marketable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Buyable {

	getBuyableOffer(): (Marketable & Semanticable);

}
