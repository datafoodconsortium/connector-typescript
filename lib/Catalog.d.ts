import ICatalog from "./ICatalog.js";
import IOrganization from "./IOrganization.js";
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
    getItems(options?: IGetterOptions): Promise<ICatalogItem[]>;
    setItems(items: ICatalogItem[]): void;
    removeItem(item: ICatalogItem): void;
    setBeginDate(beginDate: string): void;
    addMaintainer(maintainer: IOrganization): void;
    removeMaintainer(maintainer: IOrganization): void;
    getMaintainers(options?: IGetterOptions): Promise<IOrganization[]>;
    setMaintainers(maintainers: IOrganization[]): void;
    getBeginDate(): string | undefined;
    setEndDate(endDate: string): void;
    getEndDate(): string | undefined;
    addItem(item: ICatalogItem): void;
}
//# sourceMappingURL=Catalog.d.ts.map