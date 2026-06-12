import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import IPlannedFlow from "./IPlannedFlow.js";
import IDefinedProduct from "./IDefinedProduct.js";
import Flow from "./Flow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedConsumptionFlow extends Flow implements IPlannedFlow, IPlannedConsumptionFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedTransformation;
        product?: IDefinedProduct;
        doNotStore?: boolean;
    });
    getPlannedTransformation(options?: IGetterOptions): Promise<IPlannedTransformation | undefined>;
    setConsumedProduct(consumedProduct: IDefinedProduct): void;
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
    getConsumedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
}
//# sourceMappingURL=PlannedConsumptionFlow.d.ts.map