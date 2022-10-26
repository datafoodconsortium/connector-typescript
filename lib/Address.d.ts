import Localizable from "./Localizable.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
export default class Address extends SemanticObject implements Localizable {
    private street;
    private postalCode;
    private city;
    private country;
    constructor(street: string, postalCode: string, city: string, country: string);
    setStreet(street: string): void;
    getPostalCode(): string;
    setCountry(country: string): void;
    getCountry(): string;
    setPostalCode(postalCode: string): void;
    setCity(city: string): void;
    getCity(): string;
    getStreet(): string;
}
//# sourceMappingURL=Address.d.ts.map