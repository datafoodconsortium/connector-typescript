export default interface Localizable {
    getStreet(): string | undefined;
    getPostalCode(): string | undefined;
    getCity(): string | undefined;
    getCountry(): string | undefined;
    setStreet(street: string): void;
    setPostalCode(postalCode: string): void;
    setCity(city: string): void;
    setCountry(country: string): void;
    getLatitude(): number | undefined;
    setLatitude(latitude: number): void;
    getLongitude(): number | undefined;
    setLongitude(longitude: number): void;
    getRegion(): string | undefined;
    setRegion(region: string): void;
}
//# sourceMappingURL=Localizable.d.ts.map