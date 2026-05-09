import Flow from "./Flow.js";
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import IDefinedProduct from "./IDefinedProduct.js";
import IQuantity from "./IQuantity.js";
import IPlannedFlow from "./IPlannedFlow.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedConsumptionFlow extends Flow implements IPlannedConsumptionFlow, IPlannedFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedTransformation;
        product?: IDefinedProduct;
        doNotStore?: boolean;
    });
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
    getConsumedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    setConsumedProduct(consumedProduct: IDefinedProduct): void;
    getPlannedTransformation(options?: IGetterOptions): Promise<IPlannedTransformation | undefined>;
}
//# sourceMappingURL=PlannedConsumptionFlow.d.ts.map