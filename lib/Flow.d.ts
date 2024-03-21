import IFlow from "./IFlow.js";
import IQuantity from "./IQuantity.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default abstract class Flow extends SemanticObject implements IFlow {
    protected connector: IConnector;
    protected constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        semanticType?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        doNotStore?: boolean;
    });
    setQuantity(quantity: IQuantity): void;
    getQuantity(): IQuantity | undefined;
}
//# sourceMappingURL=Flow.d.ts.map