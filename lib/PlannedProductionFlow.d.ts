import IPlannedTransformation from "./IPlannedTransformation.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import Flow from "./Flow.js";
import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
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
    getPlannedTransformation(options?: IGetterOptions): Promise<IPlannedTransformation | undefined>;
    setPlannedTransformation(plannedTransformation: IPlannedTransformation): void;
    setProducedProduct(producedProduct: ISuppliedProduct): void;
}
//# sourceMappingURL=PlannedProductionFlow.d.ts.map