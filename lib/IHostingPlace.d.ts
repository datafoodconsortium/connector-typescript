import IPlace from "./IPlace.js";
export default interface IHostingPlace {
    getHostingPlaces(): Promise<IPlace[]>;
    addHostingPlace(hostingPlace: IPlace): void;
    setHostingPlaces(hostingPlaces: IPlace[]): void;
    removeHostingPlace(hostingPlace: IPlace): void;
}
//# sourceMappingURL=IHostingPlace.d.ts.map