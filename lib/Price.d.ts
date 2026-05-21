import ISKOSConcept from "./ISKOSConcept.js";
import IPrice from "./IPrice.js";
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
    getQuantityUnit(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getQuantityValue(): number | undefined;
    setQuantityValue(quantityValue: number): void;
    setQuantityUnit(quantityUnit: ISKOSConcept): void;
    setVatRate(vatRate: number): void;
}
//# sourceMappingURL=Price.d.ts.map