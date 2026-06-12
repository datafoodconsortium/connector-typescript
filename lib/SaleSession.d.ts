import ISaleSession from "./ISaleSession.js";
import IOffer from "./IOffer.js";
import IPlace from "./IPlace.js";
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
    getEndDate(): string | undefined;
    removeOffer(offer: IOffer): void;
    setBeginDate(beginDate: string): void;
    addOffer(offer: IOffer): void;
    setOffers(offers: IOffer[]): void;
    addHostingPlace(hostingPlace: IPlace): void;
    getHostingPlaces(options?: IGetterOptions): Promise<IPlace[]>;
    getQuantity(): number | undefined;
    getOffers(options?: IGetterOptions): Promise<IOffer[]>;
    removeHostingPlace(hostingPlace: IPlace): void;
    setQuantity(quantity: number): void;
    setEndDate(endDate: string): void;
    setHostingPlaces(hostingPlaces: IPlace[]): void;
    getBeginDate(): string | undefined;
}
//# sourceMappingURL=SaleSession.d.ts.map