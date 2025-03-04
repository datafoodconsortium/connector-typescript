import DefinedProduct from "./DefinedProduct.js";
import IQuantity from "./IQuantity.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import ISKOSConcept from "./ISKOSConcept.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import ICatalogItem from "./ICatalogItem.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
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
        doNotStore?: boolean;
    });
}
//# sourceMappingURL=SuppliedProduct.d.ts.map