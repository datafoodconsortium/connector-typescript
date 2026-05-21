import IProductBatch from "./IProductBatch.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
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
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    addProductBatch(productBatch: IProductBatch): void;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    setProductBatches(ProductBatches: IProductBatch[]): void;
    setQuantity(quantity: IQuantity): void;
    getAvailabilityDate(): string | undefined;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    removeProductBatch(ProductBatch: IProductBatch): void;
    getQuantity(): IQuantity | undefined;
    getProductBatches(options?: IGetterOptions): Promise<IProductBatch[]>;
    setAvailabilityDate(availabilityDate: string): void;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
}
//# sourceMappingURL=RealStock.d.ts.map