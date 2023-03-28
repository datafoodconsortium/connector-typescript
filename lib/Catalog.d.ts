import IEnterprise from "./IEnterprise.js";
import ICatalog from "./ICatalog.js";
import ICatalogItem from "./ICatalogItem.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Catalog extends SemanticObject implements ICatalog {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        maintainers?: IEnterprise[];
        items?: ICatalogItem[];
        doNotStore?: boolean;
    });
    getItems(options?: IGetterOptions): Promise<Array<ICatalogItem>>;
    addMaintainer(maintainer: IEnterprise): void;
    removeItem(item: ICatalogItem): void;
    getMaintainers(options?: IGetterOptions): Promise<Array<IEnterprise>>;
    addItem(item: ICatalogItem): void;
}
//# sourceMappingURL=Catalog.d.ts.map