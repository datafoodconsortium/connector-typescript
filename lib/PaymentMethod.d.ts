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
    setProvider(provider: string): void;
    getDescription(): string | undefined;
    getName(): string | undefined;
    setType(type: string): void;
    setPrice(price: IPrice): void;
    getType(): string | undefined;
    getPrice(): IPrice | undefined;
    setDescription(description: string): void;
    setName(name: string): void;
    getProvider(): string | undefined;
}
//# sourceMappingURL=PaymentMethod.d.ts.map