import IPlace from "./IPlace.js";
export default interface IVirtualPlace extends IPlace {
    getUrls(): string[];
    addUrl(url: string): void;
    removeUrl(url: string): void;
    setUrls(urls: string[]): void;
}
//# sourceMappingURL=IVirtualPlace.d.ts.map