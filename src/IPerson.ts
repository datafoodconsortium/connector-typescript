import Personable from "./Personable.js"
import Affiliable from "./Affiliable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IPerson extends Semanticable, Affiliable, Personable{


}
