import ISKOSConcept from "./ISKOSConcept.js";
import IQuantity from "./IQuantity.js";
import { SemanticObjectAnonymous } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Quantity extends SemanticObjectAnonymous implements IQuantity {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
    });
    getQuantityValue(): number | undefined;
    setQuantityUnit(quantityUnit: ISKOSConcept): void;
    getQuantityUnit(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setQuantityValue(quantityValue: number): void;
}
//# sourceMappingURL=Quantity.d.ts.map