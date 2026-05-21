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
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    getName(): string | undefined;
    getBatchNumber(): string | undefined;
    getExpirationDate(): string | undefined;
    setBatchNumber(batchNumber: string): void;
    setRealStock(realStock: IRealStock): void;
    setExpirationDate(expirationDate: string): void;
    setBestBeforeDate(bestBeforeDate: string): void;
    getRealStock(options?: IGetterOptions): Promise<IRealStock | undefined>;
    getProductionDate(): string | undefined;
    setName(name: string): void;
    getBestBeforeDate(): string | undefined;
    setProductionDate(productionDate: string): void;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
}
//# sourceMappingURL=ProductBatch.d.ts.map