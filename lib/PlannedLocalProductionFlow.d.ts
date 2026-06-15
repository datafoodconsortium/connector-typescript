import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import IQuantity from "./IQuantity.js";
import Flow from "./Flow.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
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
    getPlannedLocalTransformation(options?: IGetterOptions): Promise<IPlannedLocalTransformation | undefined>;
    setProducedProduct(producedProduct: ILocalizedProduct): void;
    getProducedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
}
//# sourceMappingURL=PlannedLocalProductionFlow.d.ts.map