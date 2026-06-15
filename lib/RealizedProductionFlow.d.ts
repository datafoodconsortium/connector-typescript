import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import Flow from "./Flow.js";
import IQuantity from "./IQuantity.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealizedFlow from "./IRealizedFlow.js";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class RealizedProductionFlow extends Flow implements IRealizedFlow, IRealizedProductionFlow {
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
    setRealizedTransformation(realizedTransformation: IRealizedTransformation): void;
    setProducedProduct(producedProduct: IPhysicalProduct): void;
    getProducedProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
}
//# sourceMappingURL=RealizedProductionFlow.d.ts.map