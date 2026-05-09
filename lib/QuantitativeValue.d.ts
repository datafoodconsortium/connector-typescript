import ISKOSConcept from "./ISKOSConcept.js";
import Quantifiable from "./Quantifiable.js";
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
    setQuantityUnit(quantityUnit: ISKOSConcept): void;
    setQuantityValue(quantityValue: number): void;
    getQuantityUnit(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
}
//# sourceMappingURL=QuantitativeValue.d.ts.map