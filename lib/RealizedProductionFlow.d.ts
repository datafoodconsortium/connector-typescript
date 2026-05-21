import IRealizedTransformation from "./IRealizedTransformation.js";
import Flow from "./Flow.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import IRealizedFlow from "./IRealizedFlow.js";
import IQuantity from "./IQuantity.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class RealizedProductionFlow extends Flow implements IRealizedProductionFlow, IRealizedFlow {
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        quantity?: IQuantity;
        transformation?: IRealizedTransformation;
        product?: IPhysicalProduct;
        doNotStore?: boolean;
    });
    getProducedProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    getRealizedTransformation(options?: IGetterOptions): Promise<IRealizedTransformation | undefined>;
    setRealizedTransformation(realizedTransformation: IRealizedTransformation): void;
    setProducedProduct(producedProduct: IPhysicalProduct): void;
}
//# sourceMappingURL=RealizedProductionFlow.d.ts.map