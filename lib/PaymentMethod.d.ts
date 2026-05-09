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
    getDescription(): string | undefined;
    getType(): string | undefined;
    getName(): string | undefined;
    setType(type: string): void;
    setDescription(description: string): void;
    setName(name: string): void;
    setPrice(price: IPrice): void;
    getProvider(): string | undefined;
    setProvider(provider: string): void;
    getPrice(): IPrice | undefined;
}
//# sourceMappingURL=PaymentMethod.d.ts.map