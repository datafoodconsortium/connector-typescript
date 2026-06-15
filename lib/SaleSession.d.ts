import IOffer from "./IOffer.js";
import ISaleSession from "./ISaleSession.js";
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
        doNotStore?: boolean;
    });
    setOffers(offers: IOffer[]): void;
    getOffers(options?: IGetterOptions): Promise<IOffer[]>;
    getBeginDate(): string | undefined;
    addOffer(offer: IOffer): void;
    getQuantity(): number | undefined;
    getEndDate(): string | undefined;
    setEndDate(endDate: string): void;
    setQuantity(quantity: number): void;
    removeOffer(offer: IOffer): void;
    setBeginDate(beginDate: string): void;
}
//# sourceMappingURL=SaleSession.d.ts.map