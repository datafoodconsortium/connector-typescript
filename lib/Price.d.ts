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
    getQuantityValue(): number | undefined;
    getVatRate(): number | undefined;
    setVatRate(vatRate: number): void;
    setQuantityUnit(quantityUnit: ISKOSConcept): void;
    getQuantityUnit(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setQuantityValue(quantityValue: number): void;
}
//# sourceMappingURL=Price.d.ts.map