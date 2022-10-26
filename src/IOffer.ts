import Payable from "./Payable.js"
import Marketable from "./Marketable.js"
import Stockable from "./Stockable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IOffer extends Marketable, Stockable, Payable {


}
