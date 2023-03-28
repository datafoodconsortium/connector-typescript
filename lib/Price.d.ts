import IPrice from "./IPrice.js";
import IUnit from "./IUnit.js";
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
        unit?: IUnit;
    });
    getUnit(options?: IGetterOptions): Promise<IUnit | undefined>;
    setValue(value: number): void;
    getValue(): number;
    setUnit(unit: IUnit): void;
    getVatRate(): number;
    setVatRate(vatRate: number): void;
}
//# sourceMappingURL=Price.d.ts.map