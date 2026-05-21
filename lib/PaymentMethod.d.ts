import IPaymentMethod from "./IPaymentMethod.js";
import IPrice from "./IPrice.js";
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
    setPrice(price: IPrice): void;
    getDescription(): string | undefined;
    getProvider(): string | undefined;
    setProvider(provider: string): void;
    setDescription(description: string): void;
    getName(): string | undefined;
    setType(type: string): void;
    setName(name: string): void;
    getPrice(): IPrice | undefined;
    getType(): string | undefined;
}
//# sourceMappingURL=PaymentMethod.d.ts.map