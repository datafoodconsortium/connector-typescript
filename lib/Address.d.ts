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
        latitude?: number;
        longitude?: number;
        region?: string;
        doNotStore?: boolean;
    });
    setPostalCode(postalCode: string): void;
    setCountry(country: string): void;
    getLatitude(): number | undefined;
    getRegion(): string | undefined;
    setLatitude(latitude: number): void;
    setRegion(region: string): void;
    getPostalCode(): string | undefined;
    getCountry(): string | undefined;
    setCity(city: string): void;
    setLongitude(longitude: number): void;
    getLongitude(): number | undefined;
    setStreet(street: string): void;
    getStreet(): string | undefined;
    getCity(): string | undefined;
}
//# sourceMappingURL=Address.d.ts.map