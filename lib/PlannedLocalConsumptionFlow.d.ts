import Flow from "./Flow.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import IPlannedLocalConsumptionFlow from "./IPlannedLocalConsumptionFlow.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedLocalConsumptionFlow extends Flow implements IPlannedLocalConsumptionFlow, IPlannedLocalFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedLocalTransformation;
        product?: ILocalizedProduct;
        doNotStore?: boolean;
    });
    getPlannedLocalTransformation(options?: IGetterOptions): Promise<IPlannedLocalTransformation | undefined>;
    setConsumedProduct(consumedProduct: ILocalizedProduct): void;
    getConsumedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
}
//# sourceMappingURL=PlannedLocalConsumptionFlow.d.ts.map