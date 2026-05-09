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
    getCity(): string | undefined;
    setPostalCode(postalCode: string): void;
    setLatitude(latitude: number): void;
    getLongitude(): number | undefined;
    getStreet(): string | undefined;
    getLatitude(): number | undefined;
    getRegion(): string | undefined;
    setCountry(country: string): void;
    setStreet(street: string): void;
    setCity(city: string): void;
    getCountry(): string | undefined;
    getPostalCode(): string | undefined;
    setRegion(region: string): void;
    setLongitude(longitude: number): void;
}
//# sourceMappingURL=Address.d.ts.map