import ITheoreticalStock from "./ITheoreticalStock.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
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
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    setQuantity(quantity: IQuantity): void;
    getAvailabilityDate(): string | undefined;
    getQuantity(): IQuantity | undefined;
    setAvailabilityDate(availabilityDate: string): void;
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    getLocalizedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    setLocalizedProduct(localizedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=TheoreticalStock.d.ts.map