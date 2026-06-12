import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import ICatalogItem from "./ICatalogItem.js";
import ISKOSConcept from "./ISKOSConcept.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import IVariant from "./IVariant.js";
import DefinedProduct from "./DefinedProduct.js";
import IProductOption from "./IProductOption.js";
import ITechnicalProduct from "./ITechnicalProduct.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class TechnicalProduct extends DefinedProduct implements ITechnicalProduct {
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
        variants?: IVariant[];
        referenceProductOptions?: IProductOption[];
        images?: string[];
        doNotStore?: boolean;
    });
}
//# sourceMappingURL=TechnicalProduct.d.ts.map