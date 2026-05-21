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
    setCity(city: string): void;
    getLongitude(): number | undefined;
    getCountry(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    getStreet(): string | undefined;
    setStreet(street: string): void;
    getRegion(): string | undefined;
    getPostalCode(): string | undefined;
    setLatitude(latitude: number): void;
    setLongitude(longitude: number): void;
    setRegion(region: string): void;
    setCountry(country: ISKOSConcept): void;
    setPostalCode(postalCode: string): void;
    getLatitude(): number | undefined;
    getCity(): string | undefined;
}
//# sourceMappingURL=Address.d.ts.map