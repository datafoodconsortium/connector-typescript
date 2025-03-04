import Quantifiable from "./Quantifiable.js";
import ISKOSConcept from "./ISKOSConcept.js";
import { SemanticObjectAnonymous } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class QuantitativeValue extends SemanticObjectAnonymous implements Quantifiable {
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
    setQuantityValue(quantityValue: number): void;
    getQuantityUnit(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setQuantityUnit(quantityUnit: ISKOSConcept): void;
}
//# sourceMappingURL=QuantitativeValue.d.ts.map