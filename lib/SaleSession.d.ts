import IPlace from "./IPlace.js";
import ISaleSession from "./ISaleSession.js";
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
    addHostingPlace(hostingPlace: IPlace): void;
    setBeginDate(beginDate: string): void;
    setEndDate(endDate: string): void;
    addOffer(offer: IOffer): void;
    setQuantity(quantity: number): void;
    getOffers(options?: IGetterOptions): Promise<IOffer[]>;
    setHostingPlaces(hostingPlaces: IPlace[]): void;
    setOffers(offers: IOffer[]): void;
    getBeginDate(): string | undefined;
    removeOffer(offer: IOffer): void;
    getQuantity(): number | undefined;
    getEndDate(): string | undefined;
    removeHostingPlace(hostingPlace: IPlace): void;
    getHostingPlaces(options?: IGetterOptions): Promise<IPlace[]>;
}
//# sourceMappingURL=SaleSession.d.ts.map