import ICharacteristic from "./ICharacteristic.js";
import ICharacteristicDimension from "./ICharacteristicDimension.js";
import IUnit from "./IUnit.js";
import QuantitativeValue from "./QuantitativeValue.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default abstract class Characteristic extends QuantitativeValue implements ICharacteristic {
    protected constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: IUnit;
        value?: number;
    });
    abstract getQuantityDimension(): Promise<ICharacteristicDimension | undefined>;
    abstract setQuantityDimension(quantityDimension: ICharacteristicDimension): void;
}
//# sourceMappingURL=Characteristic.d.ts.map