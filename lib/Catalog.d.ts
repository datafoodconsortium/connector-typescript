import ICatalogItem from "./ICatalogItem.js";
import IEnterprise from "./IEnterprise.js";
import ICatalog from "./ICatalog.js";
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
    getMaintainers(options?: IGetterOptions): Promise<IEnterprise[]>;
    removeItem(item: ICatalogItem): void;
    getItems(options?: IGetterOptions): Promise<ICatalogItem[]>;
    setMaintainers(maintainers: IEnterprise[]): void;
    addMaintainer(maintainer: IEnterprise): void;
    setItems(items: ICatalogItem[]): void;
    addItem(item: ICatalogItem): void;
    removeMaintainer(maintainer: IEnterprise): void;
}
//# sourceMappingURL=Catalog.d.ts.map