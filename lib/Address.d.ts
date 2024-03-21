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
    getCountry(): string | undefined;
    getCity(): string | undefined;
    setLatitude(latitude: number): void;
    getStreet(): string | undefined;
    setPostalCode(postalCode: string): void;
    getLongitude(): number | undefined;
    getRegion(): string | undefined;
    setCountry(country: string): void;
    getLatitude(): number | undefined;
    setStreet(street: string): void;
    setLongitude(longitude: number): void;
    getPostalCode(): string | undefined;
    setRegion(region: string): void;
    setCity(city: string): void;
}
//# sourceMappingURL=Address.d.ts.map