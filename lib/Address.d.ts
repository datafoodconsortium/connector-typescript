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
    setCity(city: string): void;
    getLatitude(): number | undefined;
    setLatitude(latitude: number): void;
    getCountry(options?: IGetterOptions): Promise<ISKOSConcept | undefined>;
    setCountry(country: ISKOSConcept): void;
    getLongitude(): number | undefined;
    setRegion(region: string): void;
    getCity(): string | undefined;
    setStreet(street: string): void;
    setLongitude(longitude: number): void;
    getRegion(): string | undefined;
    getStreet(): string | undefined;
    getPostalCode(): string | undefined;
    setPostalCode(postalCode: string): void;
}
//# sourceMappingURL=Address.d.ts.map