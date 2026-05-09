import Flow from "./Flow.js";
import IPhysicalProduct from "./IPhysicalProduct.js";
import IRealizedFlow from "./IRealizedFlow.js";
import IQuantity from "./IQuantity.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
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
    setProducedProduct(producedProduct: IPhysicalProduct): void;
    getRealizedTransformation(options?: IGetterOptions): Promise<IRealizedTransformation | undefined>;
    setRealizedTransformation(realizedTransformation: IRealizedTransformation): void;
    getProducedProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
}
//# sourceMappingURL=RealizedProductionFlow.d.ts.map