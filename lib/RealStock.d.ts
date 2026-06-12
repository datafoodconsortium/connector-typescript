import IPhysicalProduct from "./IPhysicalProduct.js";
import IProductBatch from "./IProductBatch.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IRealStock from "./IRealStock.js";
import IQuantity from "./IQuantity.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class RealStock extends SemanticObject implements IRealStock {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        physicalProduct?: IPhysicalProduct;
        quantity?: IQuantity;
        physicalPlace?: IPhysicalPlace;
        availabilityDate?: string;
        productBatches?: IProductBatch[];
        doNotStore?: boolean;
    });
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    getAvailabilityDate(): string | undefined;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    setAvailabilityDate(availabilityDate: string): void;
    addProductBatch(productBatch: IProductBatch): void;
    removeProductBatch(ProductBatch: IProductBatch): void;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    setProductBatches(ProductBatches: IProductBatch[]): void;
    getProductBatches(options?: IGetterOptions): Promise<IProductBatch[]>;
}
//# sourceMappingURL=RealStock.d.ts.map