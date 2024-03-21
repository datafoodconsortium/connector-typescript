import ISKOSConcept from "./ISKOSConcept.js";
import IPhysicalCharacteristic from "./IPhysicalCharacteristic.js";
import Characteristic from "./Characteristic.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PhysicalCharacteristic extends Characteristic implements IPhysicalCharacteristic {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
        physicalDimension?: ISKOSConcept;
    });
    getQuantityDimension(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setQuantityDimension(quantityDimension: ISKOSConcept): void;
}
//# sourceMappingURL=PhysicalCharacteristic.d.ts.map