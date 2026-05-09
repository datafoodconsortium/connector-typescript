import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import ISKOSConcept from "./ISKOSConcept.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import DefinedProduct from "./DefinedProduct.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import ICatalogItem from "./ICatalogItem.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class SuppliedProduct extends DefinedProduct implements ISuppliedProduct {
    getTotalTheoreticalStock(): number | undefined;
    setTotalTheoreticalStock(totalTheoreticalStock: number): void;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        productType?: ISKOSConcept;
        quantity?: IQuantity;
        alcoholPercentage?: number;
        lifetime?: string;
        claims?: ISKOSConcept[];
        usageOrStorageConditions?: string;
        allergenCharacteristics?: IAllergenCharacteristic[];
        nutrientCharacteristics?: INutrientCharacteristic[];
        physicalCharacteristics?: IPhysicalCharacteristic[];
        geographicalOrigin?: ISKOSConcept;
        catalogItems?: ICatalogItem[];
        certifications?: ISKOSConcept[];
        natureOrigin?: ISKOSConcept[];
        partOrigin?: ISKOSConcept[];
        totalTheoreticalStock?: number;
        images?: string[];
        localizedProducts?: ILocalizedProduct[];
        doNotStore?: boolean;
    });
    getLocalizedProducts(options?: IGetterOptions): Promise<ILocalizedProduct[]>;
    removeLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    setLocalizedProducts(localizedProducts: ILocalizedProduct[]): void;
    addLocalizedProduct(localizedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=SuppliedProduct.d.ts.map