import Flow from "./Flow.js";
import IQuantity from "./IQuantity.js";
import IPlannedLocalProductionFlow from "./IPlannedLocalProductionFlow.js";
import ILocalizedProduct from "./ILocalizedProduct.js";
import IPlannedLocalFlow from "./IPlannedLocalFlow.js";
import IPlannedLocalTransformation from "./IPlannedLocalTransformation.js";
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
    setProducedProduct(producedProduct: ILocalizedProduct): void;
    setPlannedLocalTransformation(plannedLocalTransformation: IPlannedLocalTransformation): void;
    getPlannedLocalTransformation(options?: IGetterOptions): Promise<IPlannedLocalTransformation | undefined>;
    getProducedProduct(options?: IGetterOptions): Promise<ILocalizedProduct | undefined>;
}
//# sourceMappingURL=PlannedLocalProductionFlow.d.ts.map