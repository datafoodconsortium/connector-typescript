import IQuantity from "./IQuantity.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IProductBatch from "./IProductBatch.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealStock from "./IRealStock.js";
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
    getProductBatches(options?: IGetterOptions): Promise<IProductBatch[]>;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    getAvailabilityDate(): string | undefined;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    addProductBatch(productBatch: IProductBatch): void;
    setAvailabilityDate(availabilityDate: string): void;
    removeProductBatch(ProductBatch: IProductBatch): void;
    getQuantity(): IQuantity | undefined;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    setQuantity(quantity: IQuantity): void;
    setProductBatches(ProductBatches: IProductBatch[]): void;
}
//# sourceMappingURL=RealStock.d.ts.map