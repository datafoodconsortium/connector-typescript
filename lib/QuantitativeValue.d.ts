import IUnit from "./IUnit.js";
import IQuantity from "./IQuantity.js";
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
        unit?: IUnit;
        value?: number;
    });
    getQuantityValue(): number;
    setQuantityUnit(quantityUnit: IUnit): void;
    setQuantityValue(quantityValue: number): void;
    getQuantityUnit(options?: IGetterOptions): Promise<IUnit | undefined>;
}
//# sourceMappingURL=QuantitativeValue.d.ts.map