import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import Flow from "./Flow.js";
import IQuantity from "./IQuantity.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
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
    setConsumedProduct(consumedProduct: ILocalizedProduct): void;
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
    getPlannedLocalTransformation(options?: IGetterOptions): Promise<IPlannedLocalTransformation | undefined>;
    getConsumedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
}
//# sourceMappingURL=PlannedLocalConsumptionFlow.d.ts.map