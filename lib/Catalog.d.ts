import IOrganization from "./IOrganization.js";
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
        maintainers?: IOrganization[];
        items?: ICatalogItem[];
        beginDate?: string;
        endDate?: string;
        doNotStore?: boolean;
    });
    setBeginDate(beginDate: string): void;
    removeItem(item: ICatalogItem): void;
    addItem(item: ICatalogItem): void;
    getBeginDate(): string | undefined;
    setEndDate(endDate: string): void;
    getEndDate(): string | undefined;
    getMaintainers(options?: IGetterOptions): Promise<IOrganization[]>;
    addMaintainer(maintainer: IOrganization): void;
    getItems(options?: IGetterOptions): Promise<ICatalogItem[]>;
}
//# sourceMappingURL=Catalog.d.ts.map