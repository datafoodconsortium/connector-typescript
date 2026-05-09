import Flow from "./Flow.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import IQuantity from "./IQuantity.js";
import IPlannedFlow from "./IPlannedFlow.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedProductionFlow extends Flow implements IPlannedProductionFlow, IPlannedFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IPlannedTransformation;
        product?: ISuppliedProduct;
        doNotStore?: boolean;
    });
    getProducedProduct(options?: IGetterOptions): Promise<ISuppliedProduct | undefined>;
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
    getPlannedTransformation(options?: IGetterOptions): Promise<IPlannedTransformation | undefined>;
    setProducedProduct(producedProduct: ISuppliedProduct): void;
}
//# sourceMappingURL=PlannedProductionFlow.d.ts.map