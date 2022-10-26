import Browsable from "./Browsable.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Catalogable {

	getRepository(): (Browsable & Semanticable) | undefined;

}
