import IPlannedProductionFlow from "./IPlannedProductionFlow.js";
import ISuppliedProduct from "./ISuppliedProduct.js";
import IQuantity from "./IQuantity.js";
import Flow from "./Flow.js";
import IPlannedFlow from "./IPlannedFlow.js";
import IPlannedTransformation from "./IPlannedTransformation.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class PlannedProductionFlow extends Flow implements IPlannedFlow, IPlannedProductionFlow {
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