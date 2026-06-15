import IAddress from "./IAddress.js";
import ISKOSConcept from "./ISKOSConcept.js";
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
    getCity(): string | undefined;
    setPostalCode(postalCode: string): void;
    setLatitude(latitude: number): void;
    getLongitude(): number | undefined;
    getStreet(): string | undefined;
    getLatitude(): number | undefined;
    getRegion(): string | undefined;
    setCountry(country: ISKOSConcept): void;
    setStreet(street: string): void;
    setCity(city: string): void;
    getCountry(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getPostalCode(): string | undefined;
    setRegion(region: string): void;
    setLongitude(longitude: number): void;
}
//# sourceMappingURL=Address.d.ts.map