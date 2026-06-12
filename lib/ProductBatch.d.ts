import IPhysicalProduct from "./IPhysicalProduct.js";
import IProductBatch from "./IProductBatch.js";
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
    getExpirationDate(): string | undefined;
    setExpirationDate(expirationDate: string): void;
    getProductionDate(): string | undefined;
    getName(): string | undefined;
    setBestBeforeDate(bestBeforeDate: string): void;
    getRealStock(options?: IGetterOptions): Promise<IRealStock | undefined>;
    setProductionDate(productionDate: string): void;
    setName(name: string): void;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    setBatchNumber(batchNumber: string): void;
    getDescription(): string | undefined;
    getBestBeforeDate(): string | undefined;
    setDescription(description: string): void;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    setRealStock(realStock: IRealStock): void;
}
//# sourceMappingURL=ProductBatch.d.ts.map