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
    setPrice(price: IPrice): void;
    setDescription(description: string): void;
    setProvider(provider: string): void;
    setType(type: string): void;
    setName(name: string): void;
    getPrice(): IPrice | undefined;
    getProvider(): string | undefined;
    getType(): string | undefined;
}
//# sourceMappingURL=PaymentMethod.d.ts.map