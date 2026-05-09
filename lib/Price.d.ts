import IPrice from "./IPrice.js";
import ISKOSConcept from "./ISKOSConcept.js";
import { SemanticObjectAnonymous } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Price extends SemanticObjectAnonymous implements IPrice {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        value?: number;
        vatRate?: number;
        unit?: ISKOSConcept;
    });
    getVatRate(): number | undefined;
    getQuantityValue(): number | undefined;
    setQuantityUnit(quantityUnit: ISKOSConcept): void;
    setQuantityValue(quantityValue: number): void;
    setVatRate(vatRate: number): void;
    getQuantityUnit(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
}
//# sourceMappingURL=Price.d.ts.map