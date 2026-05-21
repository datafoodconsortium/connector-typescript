import IRealizedTransformation from "./IRealizedTransformation.js";
import Flow from "./Flow.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import IRealizedFlow from "./IRealizedFlow.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class RealizedConsumptionFlow extends Flow implements IRealizedConsumptionFlow, IRealizedFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IRealizedTransformation;
        product?: IPhysicalProduct;
        doNotStore?: boolean;
    });
    getRealizedTransformation(options?: IGetterOptions): Promise<IRealizedTransformation | undefined>;
    setConsumedProduct(consumedProduct: IPhysicalProduct): void;
    setRealizedTransformation(realizedTransformation: IRealizedTransformation): void;
    getConsumedProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
}
//# sourceMappingURL=RealizedConsumptionFlow.d.ts.map