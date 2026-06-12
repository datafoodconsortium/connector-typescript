import IPhoneNumber from "./IPhoneNumber.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class PhoneNumber extends SemanticObject implements IPhoneNumber {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        countryCode?: number;
        phoneNumber?: string;
        doNotStore?: boolean;
    });
    getCountryCode(): number | undefined;
    setCountryCode(countryCode: number): void;
    setNumber(number: string): void;
    getNumber(): string | undefined;
}
//# sourceMappingURL=PhoneNumber.d.ts.map