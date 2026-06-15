import IRealStock from "./IRealStock.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IProductBatch from "./IProductBatch.js";
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
    getDescription(): string | undefined;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    getProductionDate(): string | undefined;
    getBestBeforeDate(): string | undefined;
    getBatchNumber(): string | undefined;
    setBestBeforeDate(bestBeforeDate: string): void;
    setBatchNumber(batchNumber: string): void;
    getExpirationDate(): string | undefined;
    getName(): string | undefined;
    setDescription(description: string): void;
    setName(name: string): void;
    setRealStock(realStock: IRealStock): void;
    setExpirationDate(expirationDate: string): void;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    getRealStock(options?: IGetterOptions): Promise<IRealStock | undefined>;
    setProductionDate(productionDate: string): void;
}
//# sourceMappingURL=ProductBatch.d.ts.map