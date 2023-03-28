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
    getBeginDate(): string;
    getEndDate(): string;
    setBeginDate(beginDate: string): void;
    setEndDate(endDate: string): void;
    setQuantity(quantity: number): void;
    addOffer(offer: IOffer): void;
    getOffers(options?: IGetterOptions): Promise<Array<IOffer>>;
    getQuantity(): number;
}
//# sourceMappingURL=SaleSession.d.ts.map