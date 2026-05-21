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
    getQuantity(): number | undefined;
    setBeginDate(beginDate: string): void;
    getEndDate(): string | undefined;
    removeOffer(offer: IOffer): void;
    setQuantity(quantity: number): void;
    setOffers(offers: IOffer[]): void;
    addOffer(offer: IOffer): void;
    getBeginDate(): string | undefined;
    setEndDate(endDate: string): void;
    getOffers(options?: IGetterOptions): Promise<IOffer[]>;
}
//# sourceMappingURL=SaleSession.d.ts.map