import ICharacteristicDimension from "./ICharacteristicDimension.js";
import Characteristic from "./Characteristic.js";
import INutrientCharacteristic from "./INutrientCharacteristic.js";
import IUnit from "./IUnit.js";
import INutrientDimension from "./INutrientDimension.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class NutrientCharacteristic extends Characteristic implements INutrientCharacteristic {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: IUnit;
        value?: number;
        nutrientDimension?: INutrientDimension;
    });
    getQuantityDimension(options?: IGetterOptions): Promise<ICharacteristicDimension | undefined>;
    setQuantityDimension(quantityDimension: ICharacteristicDimension): void;
}
//# sourceMappingURL=NutrientCharacteristic.d.ts.map