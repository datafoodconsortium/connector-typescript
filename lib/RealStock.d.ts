import IRealStock from "./IRealStock.js";
import IProductBatch from "./IProductBatch.js";
import IQuantity from "./IQuantity.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
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
    getAvailabilityDate(): string | undefined;
    setProductBatches(ProductBatches: IProductBatch[]): void;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    removeProductBatch(ProductBatch: IProductBatch): void;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
    addProductBatch(productBatch: IProductBatch): void;
    setAvailabilityDate(availabilityDate: string): void;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    getProductBatches(options?: IGetterOptions): Promise<IProductBatch[]>;
}
//# sourceMappingURL=RealStock.d.ts.map