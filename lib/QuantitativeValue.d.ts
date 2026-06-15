import IQuantity from "./IQuantity.js";
import ISKOSConcept from "./ISKOSConcept.js";
import { SemanticObjectAnonymous } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class QuantitativeValue extends SemanticObjectAnonymous implements IQuantity {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        unit?: ISKOSConcept;
        value?: number;
    });
    getQuantityUnit(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getQuantityValue(): number | undefined;
    setQuantityValue(quantityValue: number): void;
    setQuantityUnit(quantityUnit: ISKOSConcept): void;
}
//# sourceMappingURL=QuantitativeValue.d.ts.map