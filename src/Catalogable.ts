import ICatalog from "./ICatalog.js"

import { Semanticable } from "@virtual-assembly/semantizer"

export default interface Catalogable {

	getCatalogs(): Promise<Array<ICatalog>>
	;
	registerInCatalog(repository: ICatalog): void;

}
