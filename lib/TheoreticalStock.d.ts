import IQuantity from "./IQuantity.js";
import ITheoreticalStock from "./ITheoreticalStock.js";
import IPhysicalPlace from "./IPhysicalPlace.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
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
    setPhysicalPlace(physicalPlace: IPhysicalPlace): void;
    getLocalizedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    setLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    setAvailabilityDate(availabilityDate: string): void;
    getQuantity(): IQuantity | undefined;
    getPhysicalPlace(options?: IGetterOptions): Promise<IPhysicalPlace | undefined>;
    setQuantity(quantity: IQuantity): void;
}
//# sourceMappingURL=TheoreticalStock.d.ts.map