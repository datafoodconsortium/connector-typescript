import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
import Flow from "./Flow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedLocalProductionFlow extends Flow implements IPlannedLocalProductionFlow, IPlannedLocalFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedLocalTransformation;
        product?: ILocalizedProduct;
        doNotStore?: boolean;
    });
    getProducedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    getPlannedLocalTransformation(options?: IGetterOptions): Promise<IPlannedLocalTransformation | undefined>;
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
    setProducedProduct(producedProduct: ILocalizedProduct): void;
}
//# sourceMappingURL=PlannedLocalProductionFlow.d.ts.map