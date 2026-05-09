import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
import Flow from "./Flow.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
import IQuantity from "./IQuantity.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedLocalProductionFlow extends Flow implements IPlannedLocalFlow, IPlannedLocalProductionFlow {
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
    setProducedProduct(producedProduct: ILocalizedProduct): void;
    getProducedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
    getPlannedLocalTransformation(options?: IGetterOptions): Promise<IPlannedLocalTransformation | undefined>;
}
//# sourceMappingURL=PlannedLocalProductionFlow.d.ts.map