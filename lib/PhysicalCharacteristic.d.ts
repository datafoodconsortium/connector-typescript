import Characteristic from "./Characteristic.js";
import IPhysicalDimension from "./IPhysicalDimension.js";
import IUnit from "./IUnit.js";
import ICharacteristicDimension from "./ICharacteristicDimension.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PhysicalCharacteristic extends Characteristic implements IPhysicalCharacteristic {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: IUnit;
        value?: number;
        physicalDimension?: IPhysicalDimension;
    });
    getQuantityDimension(options?: IGetterOptions): Promise<ICharacteristicDimension | undefined>;
    setQuantityDimension(quantityDimension: ICharacteristicDimension): void;
}
//# sourceMappingURL=PhysicalCharacteristic.d.ts.map