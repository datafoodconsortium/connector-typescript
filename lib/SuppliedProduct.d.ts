import IClaim from "./IClaim.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import IPartOrigin from "./IPartOrigin.js";
import INatureOrigin from "./INatureOrigin.js";
import ICertification from "./ICertification.js";
import IQuantity from "./IQuantity.js";
import IProductType from "./IProductType.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import DefinedProduct from "./DefinedProduct.js";
import ICatalogItem from "./ICatalogItem.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import IGeographicalOrigin from "./IGeographicalOrigin.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class SuppliedProduct extends DefinedProduct implements ISuppliedProduct {
    getTotalTheoreticalStock(): number;
    setTotalTheoreticalStock(totalTheoreticalStock: number): void;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        productType?: IProductType;
        quantity?: IQuantity;
        alcoholPercentage?: number;
        lifetime?: string;
        claims?: IClaim[];
        usageOrStorageConditions?: string;
        allergenCharacteristics?: IAllergenCharacteristic[];
        nutrientCharacteristics?: INutrientCharacteristic[];
        physicalCharacteristics?: IPhysicalCharacteristic[];
        geographicalOrigin?: IGeographicalOrigin;
        catalogItems?: ICatalogItem[];
        certifications?: ICertification[];
        natureOrigin?: INatureOrigin[];
        partOrigin?: IPartOrigin[];
        totalTheoreticalStock?: number;
        doNotStore?: boolean;
    });
}
//# sourceMappingURL=SuppliedProduct.d.ts.map