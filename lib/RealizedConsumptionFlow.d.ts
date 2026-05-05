import Flow from "./Flow.js";
import IQuantity from "./IQuantity.js";
import IRealizedFlow from "./IRealizedFlow.js";
import IRealizedConsumptionFlow from "./IRealizedConsumptionFlow.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
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
    setConsumedProduct(consumedProduct: IPhysicalProduct): void;
    getRealizedTransformation(options?: IGetterOptions): Promise<IRealizedTransformation | undefined>;
    getConsumedProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    setRealizedTransformation(realizedTransformation: IRealizedTransformation): void;
}
//# sourceMappingURL=RealizedConsumptionFlow.d.ts.map