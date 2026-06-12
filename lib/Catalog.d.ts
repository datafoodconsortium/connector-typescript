import ICatalogItem from "./ICatalogItem.js";
import ICatalog from "./ICatalog.js";
import IOrganization from "./IOrganization.js";
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
    setItems(items: ICatalogItem[]): void;
    getEndDate(): string | undefined;
    setBeginDate(beginDate: string): void;
    getItems(options?: IGetterOptions): Promise<ICatalogItem[]>;
    addItem(item: ICatalogItem): void;
    setEndDate(endDate: string): void;
    addMaintainer(maintainer: IOrganization): void;
    getMaintainers(options?: IGetterOptions): Promise<IOrganization[]>;
    getBeginDate(): string | undefined;
    removeItem(item: ICatalogItem): void;
    setMaintainers(maintainers: IOrganization[]): void;
    removeMaintainer(maintainer: IOrganization): void;
}
//# sourceMappingURL=Catalog.d.ts.map