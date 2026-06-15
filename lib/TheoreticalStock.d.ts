import ITheoreticalStock from "./ITheoreticalStock.js";
import IQuantity from "./IQuantity.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
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
    getAvailabilityDate(): string | undefined;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    getQuantity(): IQuantity | undefined;
    setQuantity(quantity: IQuantity): void;
    setLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    getLocalizedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    setAvailabilityDate(availabilityDate: string): void;
}
//# sourceMappingURL=TheoreticalStock.d.ts.map