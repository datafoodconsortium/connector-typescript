import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import Flow from "./Flow.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IQuantity from "./IQuantity.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedLocalConsumptionFlow extends Flow implements IPlannedLocalFlow, IPlannedLocalConsumptionFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedLocalTransformation;
        product?: ILocalizedProduct;
        doNotStore?: boolean;
    });
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
    setConsumedProduct(consumedProduct: ILocalizedProduct): void;
    getConsumedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    getPlannedLocalTransformation(options?: IGetterOptions): Promise<IPlannedLocalTransformation | undefined>;
}
//# sourceMappingURL=PlannedLocalConsumptionFlow.d.ts.map