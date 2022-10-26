import Describable from "./Describable.js"
import Nameable from "./Nameable.js"
import Onboardable from "./Onboardable.js"
import Taxable from "./Taxable.js"
import Supplier from "./Supplier.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface IEnterprise extends Taxable, Describable, Nameable, Onboardable, Supplier {


}
