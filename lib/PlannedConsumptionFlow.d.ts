import IQuantity from "./IQuantity.js";
import IDefinedProduct from "./IDefinedProduct.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import IPlannedFlow from "./IPlannedFlow.js";
import Flow from "./Flow.js";
import IPlannedConsumptionFlow from "./IPlannedConsumptionFlow.js";
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
    getPlannedTransformation(options?: IGetterOptions): Promise<IPlannedTransformation | undefined>;
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
    setConsumedProduct(consumedProduct: IDefinedProduct): void;
    getConsumedProduct(options?: IGetterOptions): Promise<IDefinedProduct | undefined>;
}
//# sourceMappingURL=PlannedConsumptionFlow.d.ts.map