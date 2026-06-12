import IPhysicalProduct from "./IPhysicalProduct.js";
import Flow from "./Flow.js";
import IRealizedTransformation from "./IRealizedTransformation.js";
import IRealizedProductionFlow from "./IRealizedProductionFlow.js";
import IRealizedFlow from "./IRealizedFlow.js";
import IQuantity from "./IQuantity.js";
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
    getProducedProduct(options?: IGetterOptions): Promise<IPhysicalProduct | undefined>;
    setProducedProduct(producedProduct: IPhysicalProduct): void;
    setRealizedTransformation(realizedTransformation: IRealizedTransformation): void;
    getRealizedTransformation(options?: IGetterOptions): Promise<IRealizedTransformation | undefined>;
}
//# sourceMappingURL=RealizedProductionFlow.d.ts.map