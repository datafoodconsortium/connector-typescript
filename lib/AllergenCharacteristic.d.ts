import ICharacteristicDimension from "./ICharacteristicDimension.js";
import IAllergenCharacteristic from "./IAllergenCharacteristic.js";
import IAllergenDimension from "./IAllergenDimension.js";
import Characteristic from "./Characteristic.js";
import IUnit from "./IUnit.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class AllergenCharacteristic extends Characteristic implements IAllergenCharacteristic {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: IUnit;
        value?: number;
        allergenDimension?: IAllergenDimension;
    });
    getQuantityDimension(options?: IGetterOptions): Promise<ICharacteristicDimension | undefined>;
    setQuantityDimension(quantityDimension: ICharacteristicDimension): void;
}
//# sourceMappingURL=AllergenCharacteristic.d.ts.map