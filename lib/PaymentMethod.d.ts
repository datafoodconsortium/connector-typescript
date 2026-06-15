import IPrice from "./IPrice.js";
import IPaymentMethod from "./IPaymentMethod.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class PaymentMethod extends SemanticObject implements IPaymentMethod {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        name?: string;
        description?: string;
        price?: IPrice;
        provider?: string;
        type?: string;
        doNotStore?: boolean;
    });
    getName(): string | undefined;
    getDescription(): string | undefined;
    setDescription(description: string): void;
    setPrice(price: IPrice): void;
    setType(type: string): void;
    setName(name: string): void;
    getProvider(): string | undefined;
    getPrice(): IPrice | undefined;
    getType(): string | undefined;
    setProvider(provider: string): void;
}
//# sourceMappingURL=PaymentMethod.d.ts.map