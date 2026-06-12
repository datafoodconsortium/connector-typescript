import ILocalizedProduct from "./ILocalizedProduct.js";
import ITheoreticalStock from "./ITheoreticalStock.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import IQuantity from "./IQuantity.js";
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
    setQuantity(quantity: IQuantity): void;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    getAvailabilityDate(): string | undefined;
    getLocalizedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    setAvailabilityDate(availabilityDate: string): void;
    setLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
}
//# sourceMappingURL=TheoreticalStock.d.ts.map