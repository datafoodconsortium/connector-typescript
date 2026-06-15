import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import Flow from "./Flow.js";
import IQuantity from "./IQuantity.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
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
    getConsumedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    setConsumedProduct(consumedProduct: ILocalizedProduct): void;
    getPlannedLocalTransformation(options?: IGetterOptions): Promise<IPlannedLocalTransformation | undefined>;
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
}
//# sourceMappingURL=PlannedLocalConsumptionFlow.d.ts.map