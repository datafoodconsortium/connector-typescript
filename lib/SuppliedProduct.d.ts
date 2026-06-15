import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import ISKOSConcept from "./ISKOSConcept.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import IQuantity from "./IQuantity.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import ICatalogItem from "./ICatalogItem.js";
import DefinedProduct from "./DefinedProduct.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
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
    setLocalizedProducts(localizedProducts: ILocalizedProduct[]): void;
    getLocalizedProducts(options?: IGetterOptions): Promise<ILocalizedProduct[]>;
    addLocalizedProduct(localizedProduct: ILocalizedProduct): void;
    removeLocalizedProduct(localizedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=SuppliedProduct.d.ts.map