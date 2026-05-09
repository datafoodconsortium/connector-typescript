import IProductBatch from "./IProductBatch.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealStock from "./IRealStock.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
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
    removeProductBatch(ProductBatch: IProductBatch): void;
    getPhysicalProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    setAvailabilityDate(availabilityDate: string): void;
    setProductBatches(ProductBatches: IProductBatch[]): void;
    addProductBatch(productBatch: IProductBatch): void;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    getAvailabilityDate(): string | undefined;
    setQuantity(quantity: IQuantity): void;
    getQuantity(): IQuantity | undefined;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    getProductBatches(options?: IGetterOptions): Promise<IProductBatch[]>;
}
//# sourceMappingURL=RealStock.d.ts.map