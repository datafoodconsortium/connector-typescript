import ISKOSConcept from "./ISKOSConcept.js";
import IAddress from "./IAddress.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class Address extends SemanticObject implements IAddress {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        street?: string;
        postalCode?: string;
        city?: string;
        country?: ISKOSConcept;
        latitude?: number;
        longitude?: number;
        region?: string;
        doNotStore?: boolean;
    });
    setStreet(street: string): void;
    getCity(): string | undefined;
    getLongitude(): number | undefined;
    setRegion(region: string): void;
    setLongitude(longitude: number): void;
    setLatitude(latitude: number): void;
    getStreet(): string | undefined;
    getRegion(): string | undefined;
    getLatitude(): number | undefined;
    setCountry(country: ISKOSConcept): void;
    setCity(city: string): void;
    getPostalCode(): string | undefined;
    setPostalCode(postalCode: string): void;
    getCountry(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
}
//# sourceMappingURL=Address.d.ts.map