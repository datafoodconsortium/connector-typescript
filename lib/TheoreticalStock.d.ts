import IQuantity from "./IQuantity.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import ITheoreticalStock from "./ITheoreticalStock.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class TheoreticalStock extends SemanticObject implements ITheoreticalStock {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        localizedProduct?: ILocalizedProduct;
        quantity?: IQuantity;
        physicalPlace?: IPhysicalPlace;
        availabilityDate?: string;
        doNotStore?: boolean;
    });
    getQuantity(): IQuantity | undefined;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    getLocalizedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    getAvailabilityDate(): string | undefined;
    setAvailabilityDate(availabilityDate: string): void;
    setQuantity(quantity: IQuantity): void;
    setLocalizedProduct(localizedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=TheoreticalStock.d.ts.map