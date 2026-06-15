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
    getNumber(): string | undefined;
    setCountryCode(countryCode: number): void;
    getCountryCode(): number | undefined;
    setNumber(number: string): void;
}
//# sourceMappingURL=PhoneNumber.d.ts.map