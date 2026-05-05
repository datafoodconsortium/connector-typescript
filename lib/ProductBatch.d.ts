import IProductBatch from "./IProductBatch.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealStock from "./IRealStock.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class ProductBatch extends SemanticObject implements IProductBatch {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        batchNumber?: string;
        realStock?: IRealStock;
        physicalProduct?: IPhysicalProduct;
        bestBeforeDate?: string;
        expirationDate?: string;
        productionDate?: string;
        doNotStore?: boolean;
    });
    getBatchNumber(): string | undefined;
    getBestBeforeDate(): string | undefined;
    getDescription(): string | undefined;
    getRealStock(options?: IGetterOptions): Promise<IRealStock | undefined>;
    setProductionDate(productionDate: string): void;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    setRealStock(realStock: IRealStock): void;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    getName(): string | undefined;
    setExpirationDate(expirationDate: string): void;
    setDescription(description: string): void;
    getProductionDate(): string | undefined;
    setName(name: string): void;
    getExpirationDate(): string | undefined;
    setBestBeforeDate(bestBeforeDate: string): void;
    setBatchNumber(batchNumber: string): void;
}
//# sourceMappingURL=ProductBatch.d.ts.map