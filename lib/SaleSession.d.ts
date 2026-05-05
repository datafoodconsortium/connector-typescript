import ISaleSession from "./ISaleSession.js";
import IPlace from "./IPlace.js";
import IOffer from "./IOffer.js";
import { SemanticObject } from "@virtual-assembly/semantizer";
import { Semanticable } from "@virtual-assembly/semantizer";
import IConnector from "./IConnector.js";
import IGetterOptions from "./IGetterOptions.js";
export default class SaleSession extends SemanticObject implements ISaleSession {
    protected connector: IConnector;
    constructor(parameters: {
        connector: IConnector;
        semanticId?: string;
        other?: Semanticable;
        beginDate?: string;
        endDate?: string;
        quantity?: number;
        offers?: IOffer[];
        hostingPlaces?: IPlace[];
        doNotStore?: boolean;
    });
    setOffers(offers: IOffer[]): void;
    setBeginDate(beginDate: string): void;
    setQuantity(quantity: number): void;
    removeOffer(offer: IOffer): void;
    setEndDate(endDate: string): void;
    removeHostingPlace(hostingPlace: IPlace): void;
    getQuantity(): number | undefined;
    addOffer(offer: IOffer): void;
    addHostingPlace(hostingPlace: IPlace): void;
    getOffers(options?: IGetterOptions): Promise<IOffer[]>;
    setHostingPlaces(hostingPlaces: IPlace[]): void;
    getBeginDate(): string | undefined;
    getHostingPlaces(options?: IGetterOptions): Promise<IPlace[]>;
    getEndDate(): string | undefined;
}
//# sourceMappingURL=SaleSession.d.ts.map