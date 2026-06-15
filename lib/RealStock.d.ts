import IRealStock from "./IRealStock.js";
import IQuantity from "./IQuantity.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IProductBatch from "./IProductBatch.js";
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
    getQuantity(): IQuantity | undefined;
    setPhysicalProduct(physicalProduct: IPhysicalProduct): void;
    setProductBatches(ProductBatches: IProductBatch[]): void;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    addProductBatch(productBatch: IProductBatch): void;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    getProductBatches(options?: IGetterOptions): Promise<IProductBatch[]>;
    getAvailabilityDate(): string | undefined;
    setAvailabilityDate(availabilityDate: string): void;
    setQuantity(quantity: IQuantity): void;
    removeProductBatch(ProductBatch: IProductBatch): void;
}
//# sourceMappingURL=RealStock.d.ts.map