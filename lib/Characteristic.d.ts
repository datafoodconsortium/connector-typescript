import ISKOSConcept from "./ISKOSConcept.js";
import QuantitativeValue from "./QuantitativeValue.js";
import ICharacteristic from "./ICharacteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default abstract class Characteristic extends QuantitativeValue implements ICharacteristic {
    protected constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
    });
    abstract getQuantityDimension(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    abstract setQuantityDimension(quantityDimension: ISKOSConcept): void;
}
//# sourceMappingURL=Characteristic.d.ts.map