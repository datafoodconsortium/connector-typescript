import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
import IQuantity from "./IQuantity.js";
import Flow from "./Flow.js";
import IPlannedFlow from "./IPlannedFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import IDefinedProduct from "./IDefinedProduct.js";
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
    getConsumedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
    getPlannedTransformation(options?: IGetterOptions): Promise<IPlannedTransformation | undefined>;
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
    setConsumedProduct(consumedProduct: IDefinedProduct): void;
}
//# sourceMappingURL=PlannedConsumptionFlow.d.ts.map