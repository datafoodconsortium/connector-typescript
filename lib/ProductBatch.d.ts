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
    getRealStock(options?: IGetterOptions): Promise<IRealStock | undefined>;
    getName(): string | undefined;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    setBestBeforeDate(bestBeforeDate: string): void;
    setProductionDate(productionDate: string): void;
    setName(name: string): void;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    getExpirationDate(): string | undefined;
    setExpirationDate(expirationDate: string): void;
    getDescription(): string | undefined;
    getProductionDate(): string | undefined;
    setBatchNumber(batchNumber: string): void;
    getBatchNumber(): string | undefined;
    setDescription(description: string): void;
    setRealStock(realStock: IRealStock): void;
    getBestBeforeDate(): string | undefined;
}
//# sourceMappingURL=ProductBatch.d.ts.map