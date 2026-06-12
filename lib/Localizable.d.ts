import ISKOSConcept from "./ISKOSConcept.js";
export default interface Localizable {
    getStreet(): string | undefined;
    getPostalCode(): string | undefined;
    getCity(): string | undefined;
    getCountry(): Promise<ISKOSConcept | undefined>;
    setStreet(street: string): void;
    setPostalCode(postalCode: string): void;
    setCity(city: string): void;
    setCountry(country: ISKOSConcept): void;
    getLatitude(): number | undefined;
    setLatitude(latitude: number): void;
    getLongitude(): number | undefined;
    setLongitude(longitude: number): void;
    getRegion(): string | undefined;
    setRegion(region: string): void;
}
//# sourceMappingURL=Localizable.d.ts.map