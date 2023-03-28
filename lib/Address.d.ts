import IAddress from "./IAddress.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
export default class Address extends SemanticObject implements IAddress {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        street?: string;
        postalCode?: string;
        city?: string;
        country?: string;
        doNotStore?: boolean;
    });
    setCountry(country: string): void;
    setStreet(street: string): void;
    setCity(city: string): void;
    getCountry(): string;
    setPostalCode(postalCode: string): void;
    getPostalCode(): string;
    getCity(): string;
    getStreet(): string;
}
//# sourceMappingURL=Address.d.ts.map